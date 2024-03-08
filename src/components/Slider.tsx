import { Slider } from "@/components/ui/slider";

export default function SliderComponent() {
  return (
    <div className="flex items-center">
      <div className="ml-8 w-20">
        <Slider defaultValue={[30]}>
          <div>
            <div />
            <div />
          </div>
        </Slider>
      </div>
    </div>
  );
}
