import { GalleryModal } from "./components/gallery";

export function AboutCard(){
    return (
        <GalleryModal id="about-me" bgColor="#d5c7fc" title="About Me" titleColor="text-[#423b59]" >
                <p>This content exists only in the modal view.</p>
                {/* Add your gallery images or description here */}
            </GalleryModal>
    )
}