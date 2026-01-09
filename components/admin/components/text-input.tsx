import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { Sketch } from "@uiw/react-color"
import { ColorResult } from "@uiw/react-color";
import { UseFormRegisterReturn, ControllerRenderProps } from "react-hook-form";

type FormFieldVariant = "input" | "textarea" | "toggle";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  variant?: FormFieldVariant;
  className?: string;
  vimedra?: boolean;
  value?: string | boolean;
  onChange?: (value: string | boolean) => void;
  error?: any;
  showColorPicker?: boolean;
  description?: string;
  name?: string;
  // React Hook Form props
  field?: ControllerRenderProps<any, any>;
  register?: UseFormRegisterReturn;
}

export function TextInput({
  label,
  placeholder,
  type = "text",
  variant = "input",
  className,
  vimedra,
  value: controlledValue,
  onChange: controlledOnChange,
  error,
  showColorPicker = false,
  description,
  name,
  field,
  register,
}: FormFieldProps) {
  const [internalValue, setInternalValue] = useState<string | boolean>(
    variant === "toggle" ? false : ""
  );
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  
  // Priority: field (Controller) > register > controlled > uncontrolled
  const isFieldControlled = field !== undefined;
  const isRegisterControlled = register !== undefined;
  const isControlled = controlledValue !== undefined && !isFieldControlled && !isRegisterControlled;
  
  // Get the current value - prioritize field, then controlled, then internal
  // Note: When using register, the value is managed by react-hook-form via the spread props
  const getValue = (): string | boolean => {
    if (isFieldControlled) {
      return field.value ?? (variant === "toggle" ? false : "");
    }
    // For register, we'll use controlled value if provided, otherwise internal
    // The actual input value will come from react-hook-form via register props
    return isControlled ? controlledValue : internalValue;
  };
  
  const value = getValue();
  
  const handleChange = (newValue: string | boolean) => {
    // If using field (Controller), use field.onChange
    if (isFieldControlled) {
      field.onChange(newValue);
      return;
    }
    
    // If using register, the onChange is handled by register
    if (isRegisterControlled) {
      // register handles onChange internally via the spread props
      // But we still need to update internal state for display
      if (!isControlled) {
        setInternalValue(newValue);
      }
      return;
    }
    
    // Fallback to original controlled/uncontrolled logic
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (controlledOnChange) {
      controlledOnChange(newValue);
    }
  };

  const handleColorChange = (color: ColorResult) => {
    const hexColor = color.hex.toUpperCase();
    // If using field, call field.onChange directly
    if (isFieldControlled) {
      field.onChange(hexColor);
    } else {
      handleChange(hexColor);
    }
  };

  const handleColorButtonClick = () => {
    setIsColorPickerOpen(!isColorPickerOpen);
  };

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setIsColorPickerOpen(false);
      }
    };

    if (isColorPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isColorPickerOpen]);

  // Helper function to convert hex to hex (for display) or validate hex
  const getColorFromValue = (val: string | boolean): string => {
    if (typeof val !== "string") return "#000000";
    // If it's already a hex color, use it
    if (/^#[0-9A-F]{6}$/i.test(val)) {
      return val.toUpperCase();
    }
    // Try to extract hex from Tailwind classes like "bg-[#FFE66D]"
    const hexMatch = val.match(/#[0-9A-F]{6}/i);
    if (hexMatch) {
return hexMatch[0].toUpperCase();
    }
    return "#ffffff";
  };

  const currentColor = showColorPicker ? getColorFromValue(value as string) : "#ffffff";

  const textColorClass = cn("text-[#1e1e1e]", vimedra ? "text-white" : "");
  const borderColorClass = cn(
    "border-[#1e1e1e]",
    vimedra ? "border-white/30" : ""
  );

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-col gap-1">
        <Label className={textColorClass}>{label}</Label>
        {description && (
          <p className={cn("text-xs opacity-70", textColorClass)}>
            {description}
          </p>
        )}
      </div>
      
      {variant === "input" && (
        <div className="flex items-center gap-2">
          <Input
            type={type}
            {...(field ? {
              ...field,
              value: field.value ?? "",
              onChange: (e) => field.onChange(e.target.value),
            } : {})}
            {...(register && !field ? register : {})}
            {...(!field && !register ? {
              name,
              value: value as string,
              onChange: (e) => handleChange(e.target.value),
            } : {})}
            placeholder={placeholder}
            className={cn(textColorClass, borderColorClass, "flex-1")}
            disabled={showColorPicker}
          />
          {showColorPicker && (
            <div className="relative" ref={colorPickerRef}>
              <button
                type="button"
                onClick={handleColorButtonClick}
                className={cn(
                  "h-5 w-5 rounded-full border cursor-pointer transition-all hover:scale-105 relative group",
                  borderColorClass,
                  vimedra ? "focus:ring-white" : "focus:ring-[#1e1e1e]"
                )}
                style={{ backgroundColor: currentColor }}
                aria-label="Pick a color"
              >
                <span className="text-sm text-black absolute -top-10 -left-10 border w-20 rounded-md bg-white group-hover:block hidden transition-all duration-300">Pick a color</span>
              </button>
              {isColorPickerOpen && (
                <div className="absolute top-8 right-0 z-50 shadow-lg">
                  <Sketch 
                    color={currentColor} 
                    onChange={handleColorChange}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      {variant === "textarea" && (
        <Textarea
          {...(field ? {
            ...field,
            value: field.value ?? "",
            onChange: (e) => field.onChange(e.target.value),
          } : {})}
          {...(register && !field ? register : {})}
          {...(!field && !register ? {
            name,
            value: value as string,
            onChange: (e) => handleChange(e.target.value),
          } : {})}
          placeholder={placeholder}
          className={cn(textColorClass, borderColorClass)}
          rows={17}
        />
      )}
      
      {variant === "toggle" && (
        <div className="flex items-center gap-3">
          <input
            type="hidden"
            {...(field ? { ...field, value: field.value ? "true" : "false" } : {})}
            {...(register && !field ? register : {})}
            {...(!field && !register ? {
              name,
              value: value ? "true" : "false",
            } : {})}
          />
          <button
            type="button"
            role="switch"
            aria-checked={value as boolean}
            onClick={() => {
              const newValue = !(value as boolean);
              if (isFieldControlled) {
                field.onChange(newValue);
              } else {
                handleChange(newValue);
              }
            }}
            className={cn(
              "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
              value
                ? vimedra
                  ? "bg-white"
                  : "bg-[#1e1e1e]"
                : "bg-gray-300",
              vimedra ? "focus:ring-white" : "focus:ring-[#1e1e1e]"
            )}
          >
            <span
              className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                value ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span className={cn("text-sm", textColorClass)}>
            {value ? "Enabled" : "Disabled"}
          </span>
        </div>
      )}
      
      {error && <p className="text-red-500 text-sm">{error.message || error}</p>}
    </div>
  );
}
