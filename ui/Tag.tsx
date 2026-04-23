interface TagProps {
  label: string; // 标签文字
  onClick?: () => void;
  className?: string; // 外部传入控制样式
}

// 设定高度 宽度根据内容来撑 背景色保持与卡片还有详情颜色一致
export default function Tag({ label, onClick, className }: TagProps) {
  return (
    <button lang="en"
      onClick={onClick}
      className={`flex items-center text-gray-1 font-bold  
                  text-[18px] xl:text-[16px] lg:text-[18px] md:text-md-12
                  px-[25px] xl:px-[25px] xl:py-[18px] lg:px-[25px] lg:py-[18px] md:px-md-16 md:py-md-8
                  h-[36px] xl:h-[36px] lg:h-[36px] md:h-md-16
                  rounded-50 border-gray-0 border-[1px] ${className}`}
    >
      {label}
    </button>
  );
}