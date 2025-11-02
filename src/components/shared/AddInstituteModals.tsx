import { ImageWithFallback } from '../figma/ImageWithFallback';
import svgPathsError from "../../imports/svg-or09pn6sc1";
import svgPathsSuccess from "../../imports/svg-xt6mavxwkq";

type ModalStatus = 'loading' | 'success' | 'error';

type AddInstituteModalsProps = {
  status: ModalStatus | null;
  onClose?: () => void;
};

export function AddInstituteModals({ status, onClose }: AddInstituteModalsProps) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl">
        {status === 'loading' && <LoadingModal />}
        {status === 'success' && <SuccessModal onClose={onClose} />}
        {status === 'error' && <ErrorModal onClose={onClose} />}
      </div>
    </div>
  );
}

function LoadingModal() {
  return (
    <div className="bg-white relative w-[412px] h-[378px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[206px] not-italic text-[32px] text-black text-center top-[66px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Please Wait</p>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[206px] not-italic text-[#9b9b9b] text-[15px] text-center top-[95px] translate-x-[-50%] w-[334px]">
        Your institute is being created
      </p>
      
      {/* Loading Animation */}
      <div className="absolute left-[96px] size-[219px] top-[125px]">
        <ImageWithFallback 
          alt="Loading" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="https://assets3.lottiefiles.com/packages/lf20_yyytgjwe.json"
        />
      </div>
    </div>
  );
}

function ErrorModal({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white relative w-[412px] h-[378px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[206px] not-italic text-[32px] text-black text-center top-[57px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Whoops :(</p>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[206px] not-italic text-[#9b9b9b] text-[15px] text-center top-[86px] translate-x-[-50%] w-[258px]">
        Something is wrong from our end, plz try again later
      </p>
      
      {/* Error Icon */}
      <div className="absolute left-[140px] overflow-clip size-[131px] top-[180px]">
        <div className="absolute contents inset-[8.64%_9.24%_9.24%_8.64%]">
          {/* Red Circle */}
          <div className="absolute inset-[8.64%_9.24%_9.24%_8.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 108">
              <path d={svgPathsError.p11ec6000} fill="#EB5757" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Sad Mouth */}
          <div className="absolute inset-[50.32%_34.31%_38.81%_34.3%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 15">
              <path d={svgPathsError.p36440c00} fill="white" />
            </svg>
          </div>
          
          {/* Left Eye */}
          <div className="absolute flex inset-[35.97%_59.03%_54.7%_31.64%] items-center justify-center">
            <div className="flex-none h-[9.03px] rotate-[45deg] w-[8.264px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                <path d={svgPathsError.p3e26b080} fill="white" />
              </svg>
            </div>
          </div>
          
          {/* Right Eye */}
          <div className="absolute flex inset-[35.8%_32.86%_54.87%_57.81%] items-center justify-center">
            <div className="flex-none h-[9.03px] rotate-[135deg] w-[8.264px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                <path d={svgPathsError.p3e26b080} fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 px-6 py-2 bg-[#1f60d8] text-white rounded-md hover:bg-[#1850b8] transition-colors"
        >
          Close
        </button>
      )}
    </div>
  );
}

function SuccessModal({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white relative w-[412px] h-[378px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[206px] not-italic text-[32px] text-black text-center top-[57px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Institute Created</p>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[206px] not-italic text-[#9b9b9b] text-[15px] text-center top-[86px] translate-x-[-50%] w-[320px]">
        Please check your email for credentials
      </p>
      
      {/* Success Illustration - Simplified email icon */}
      <div className="absolute left-[96px] size-[219px] top-[125px]">
        <div className="absolute contents inset-[37.57%_23.36%_6.96%_23.36%]">
          {/* Background Blobs */}
          <div className="absolute flex inset-[37.57%_24.35%_6.96%_23.36%] items-center justify-center">
            <div className="flex-none h-[189.984px] rotate-[186.06deg] skew-x-[0.119deg] w-[196.369px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 190">
                <path d={svgPathsSuccess.p250aaf80} fill="#3D80F0" fillOpacity="0.15" />
              </svg>
            </div>
          </div>
          
          <div className="absolute inset-[44.3%_30.06%_10.82%_27.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176 170">
              <path d={svgPathsSuccess.p37090180} fill="#3D80F0" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Envelope Base */}
          <div className="absolute flex inset-[48.75%_29.09%_10.61%_28.12%] items-center justify-center">
            <div className="flex-none h-[114.649px] rotate-[17.3deg] w-[148.493px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 115">
                <path d={svgPathsSuccess.p114e9a00} fill="black" fillOpacity="0.2" />
              </svg>
            </div>
          </div>

          <div className="absolute flex inset-[42.02%_26.76%_11.08%_28.66%] items-center justify-center">
            <div className="flex-none h-[139.418px] rotate-[17.3deg] w-[148.493px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 140">
                <path d={svgPathsSuccess.p34c7bd80} fill="#1E6EB2" />
              </svg>
            </div>
          </div>

          {/* Paper/Letter */}
          <div className="absolute flex inset-[41.18%_29.96%_20.32%_30.29%] items-center justify-center">
            <div className="flex-none h-[109.799px] rotate-[17.3deg] w-[136.942px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 110">
                <path d={svgPathsSuccess.p64b5080} fill="#ECF2FB" />
              </svg>
            </div>
          </div>

          {/* @ Symbol */}
          <div className="absolute flex inset-[60.65%_57.64%_32.51%_36.07%] items-center justify-center">
            <div className="flex-none rotate-[15.713deg] size-[20.961px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPathsSuccess.p33cd4c00} fill="#E1EAF5" />
                <path d={svgPathsSuccess.p142877b0} fill="#1E6EB2" />
              </svg>
            </div>
          </div>

          {/* ID Badge */}
          <div className="absolute inset-[70.19%_34.33%_23.55%_52.22%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 24">
              <path d={svgPathsSuccess.p8cb8e00} fill="black" fillOpacity="0.17" />
              <path d={svgPathsSuccess.p1bf40f70} fill="white" />
              <path d={svgPathsSuccess.p27994600} fill="#DFE5F3" />
              <path d={svgPathsSuccess.p249a8e80} fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Auto-close or manual close */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 px-6 py-2 bg-[#1f60d8] text-white rounded-md hover:bg-[#1850b8] transition-colors"
        >
          Continue
        </button>
      )}
    </div>
  );
}
