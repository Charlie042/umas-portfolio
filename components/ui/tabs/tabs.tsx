"use client"
import { motion } from "motion/react";
import { createContext, useContext, useState, ReactNode } from "react"
import { cn } from "@/lib/utils";
type TabsContextProps = {
    activeTab: string;
    setActiveTab: (value: string) => void;
}

type TabsProps = {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: ReactNode;
}

type TabListProps = {
    children: ReactNode;
    className?: string;
}

type TabTriggerProps = {
    value: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

type TabContentProps = {
    value: string;
    children: ReactNode;
    className?: string;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export function Tabs({ defaultValue = "", value, onValueChange, children }: TabsProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    

    const activeTab = value !== undefined ? value : internalValue;
    
    const setActiveTab = (newValue: string) => {
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
}

function useTabs() {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("Tabs components must be used within a Tabs component");
    }
    return context;
}

export function TabList({ children, className = "" }: TabListProps) {
    return (
        <div className={cn("flex w-fit rounded-lg p-2", className)} role="tablist">
            {children}
        </div>
    );
}

export function TabTrigger({ value, children, className = "", disabled = false }: TabTriggerProps) {
    const { activeTab, setActiveTab } = useTabs();
    const isActive = activeTab === value;

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${value}`}
            id={`tab-${value}`}
            disabled={disabled}
            onClick={() => !disabled && setActiveTab(value)}
            className={cn("text-sm font-bold text-[#1E1E1E] cursor-pointe  w-20 p-2 rounded-lg relative ", className)}
        >
            {children}
        {isActive ? (
           <motion.div 
  animate={{ width: "100%" }} 
  layoutId="active-tab" 
  transition={{ 
    duration: 0.3, 
    ease: "easeInOut" 
  }}
  className={cn(
     "absolute -z-10 bottom-0 left-0 w-full h-full rounded-lg",
    "bg-white/10 backdrop-blur-md",
    "border border-white/20"
  )}
/>

        ) : null}
        </button>
    );
}

export function TabContent({ value, children, className = "" }: TabContentProps) {
    const { activeTab } = useTabs();
    const isActive = activeTab === value;

    if (!isActive) return null;

    return (
        <div
            role="tabpanel"
            id={`tabpanel-${value}`}
            aria-labelledby={`tab-${value}`}
            className={className}
        >
            {children}
        </div>
    );
}


Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

