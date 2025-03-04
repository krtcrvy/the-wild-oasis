import { Button } from "@/components/ui/button";
import { useMoveBack } from "@/hooks/use-move-back";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        The page you are looking for could not be found 😢
      </h1>
      <Button size="lg" className="hover:cursor-pointer" onClick={moveBack}>
        Go back
      </Button>
    </div>
  );
}

export default NotFound;
