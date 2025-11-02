import svgPaths from "../../imports/svg-cv2vqzaaxp";
import svgPathsPreview from "../../imports/svg-0j8btaeo0n";
import { useRef, ChangeEvent, useState } from 'react';
import { toast } from 'sonner@2.0.3';

type AddImageModalProps = {
  onClose: () => void;
  onSave: (file: File, caption?: string) => void;
};

function OutlineFilesImage({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Files/Image">
      <div className="absolute inset-[18.55%_10.77%_18.56%_10.78%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 33">
          <g id="Icon">
            <path d={svgPaths.pd68f570} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.pfb82600} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function UploadIcon() {
  return (
    <div className="h-[21.287px] relative shrink-0 w-[19.437px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p35b0f900} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p4b14d80} fill="black" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function OutlineFilesImageLarge({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Files/Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Outline/Files/Image">
          <g id="Icon">
            <path d={svgPathsPreview.p3bd80e40} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPathsPreview.p27f6f840} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function AddImageModal({ onClose, onSave }: AddImageModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [caption, setCaption] = useState<string>('');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
        toast.error('Only JPG, PNG, GIF and WebP files are supported');
        return;
      }
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setSelectedFile(file);
    }
  };

  const handleCancel = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    onClose();
  };

  const handleAddImage = () => {
    if (selectedFile) {
      onSave(selectedFile, caption);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    } else {
      handleUploadClick();
    }
  };

  return (
    <>
      {/* Dark overlay */}
      <div className="absolute bg-[#0b0c0c] h-[1024px] left-0 opacity-50 top-0 w-[1440px] z-40" onClick={handleCancel} />
      
      {/* Modal */}
      <div className="absolute bg-white h-[766px] left-[155px] overflow-clip top-[129px] w-[1129px] rounded-lg shadow-2xl z-50">
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[43px] left-[89px] not-italic text-[28.667px] text-black text-nowrap top-[25px] whitespace-pre">Add Image</p>
        
        <OutlineFilesImageLarge className="absolute left-[28px] size-[52px] top-[20px]" />
        
        {!selectedFile ? (
          /* Upload Image Button - Only show when no file selected */
          <button 
            onClick={handleUploadClick}
            className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[14.578px] h-[48.593px] items-center left-[469px] pl-[19.047px] pr-[19.047px] py-[7.017px] rounded-[8.02px] top-[350px] w-[191.133px] cursor-pointer hover:bg-[#face55] transition-colors" 
            data-name="Button"
          >
            <UploadIcon />
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.044px] text-nowrap whitespace-pre">Upload Image</p>
          </button>
        ) : (
          /* Image Preview and Caption - Show when file is selected */
          <>
            {/* Image Preview */}
            <div className="absolute h-[457px] left-[170px] rounded-[8px] top-[99px] w-[792px]" data-name="Image Preview">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                <img 
                  alt="Preview" 
                  className="absolute max-w-none object-center object-cover rounded-[8px] size-full" 
                  src={previewUrl} 
                />
              </div>
            </div>
            
            {/* Caption Input Field */}
            <div className="absolute bg-white h-[53px] left-[171px] rounded-[6.594px] top-[572px] w-[791px]" data-name="Text field">
              <div className="h-[53px] overflow-clip relative rounded-[inherit] w-[791px]">
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Image Captions"
                  className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] top-[24.86px] translate-y-[-50%] bg-transparent border-none outline-none w-[calc(100%-32px)] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
                />
              </div>
              <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
            </div>
          </>
        )}
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Action Buttons */}
        <button 
          onClick={handleCancel}
          className="absolute box-border content-stretch flex gap-[8px] h-[49px] items-center left-[750px] px-[38px] py-[7.017px] rounded-[8.02px] top-[687px] cursor-pointer hover:bg-red-50 transition-colors" 
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border-[#ff6644] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8.02px]" />
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff6644] text-[18.044px] text-nowrap whitespace-pre">Cancel</p>
        </button>

        <button 
          onClick={handleAddImage}
          className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[8px] h-[49px] items-center left-[904px] px-[38px] py-[7.017px] rounded-[8.02px] top-[687px] cursor-pointer hover:bg-[#1850b8] transition-colors" 
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18.044px] text-nowrap text-white whitespace-pre">Add Image</p>
        </button>
      </div>
    </>
  );
}
