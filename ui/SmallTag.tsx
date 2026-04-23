interface TagProps {
  label: string;
  onClick?: () => void;
}

// MARK: 小Tag 目前就BlagCard的lg大卡片与小卡片在用 lg:text-[18px] 改为 lg:text-[14px]
// py移除 xl:py-[18px] lg:px-[25px] lg:py-[12px] md:px-md-16 md:py-md-8
export default function SmallTag({ label, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-gray-1 font-bold  
                  text-[18px] xl:text-[16px] lg:text-[14px] md:text-md-12
                  px-[25px] xl:px-[25px]
                  h-[36px] xl:h-[36px] lg:h-[36px] md:h-md-16
                  rounded-50 border-gray-0 border-[1px]`}
    >
      {label}
    </button>
  );
}