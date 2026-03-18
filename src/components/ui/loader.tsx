interface LoaderProps {
  opacity?: number;
}

export function Loader({ opacity = 0.7 }: LoaderProps) {
  return (
    <div
      style={{ opacity }}
      className="fixed inset-0 flex items-center justify-center bg-white"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800" />
    </div>
  );
}
