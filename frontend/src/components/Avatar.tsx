interface AvatarProps {
    authorName : string,
    size : number
}

export function Avatar({ authorName, size }: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full"
    >
      <span className="text-gray-600">{authorName[0]}</span>
    </div>
  );
}
