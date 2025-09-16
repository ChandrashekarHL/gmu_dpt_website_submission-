import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Check } from "lucide-react";

const GradientSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState("gmu");

  const gradients = [
    {
      id: "gmu",
      name: "GMU Classic",
      primary: "--gmu-maroon: 0 45% 25%; --gmu-gold: 45 85% 65%;",
      preview: "from-red-900 to-amber-500"
    },
    {
      id: "ocean",
      name: "Ocean Blue",
      primary: "--gmu-maroon: 220 70% 25%; --gmu-gold: 200 80% 65%;",
      preview: "from-blue-900 to-cyan-500"
    },
    {
      id: "forest",
      name: "Forest Green",
      primary: "--gmu-maroon: 140 50% 25%; --gmu-gold: 60 80% 65%;",
      preview: "from-green-900 to-lime-500"
    },
    {
      id: "sunset",
      name: "Sunset Orange",
      primary: "--gmu-maroon: 15 60% 25%; --gmu-gold: 35 90% 65%;",
      preview: "from-orange-900 to-orange-400"
    },
    {
      id: "royal",
      name: "Royal Purple",
      primary: "--gmu-maroon: 270 50% 25%; --gmu-gold: 280 70% 65%;",
      preview: "from-purple-900 to-purple-400"
    }
  ];

  const applyGradient = (gradient: any) => {
    const root = document.documentElement;
    const style = document.createElement('style');
    style.innerHTML = `:root { ${gradient.primary} }`;
    document.head.appendChild(style);
    setSelectedGradient(gradient.id);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Gradient Selector Panel */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-72 card-elegant">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Choose Theme
            </h3>
            <div className="space-y-2">
              {gradients.map((gradient) => (
                <div
                  key={gradient.id}
                  className="flex items-center justify-between p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => applyGradient(gradient)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient.preview}`}></div>
                    <span className="text-sm font-medium">{gradient.name}</span>
                  </div>
                  {selectedGradient === gradient.id && (
                    <Check className="h-4 w-4 text-gmu-gold" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        variant="gmu"
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Palette className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default GradientSelector;