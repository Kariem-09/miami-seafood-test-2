import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  id: string;
  name: string;
  nameHe: string;
  description: string;
  price: string;
  image?: string;
}

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleHe: string;
  items: MenuItem[];
}

const CategoryModal = ({ isOpen, onClose, title, titleHe, items }: CategoryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">
                {title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {titleHe}
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {items.map((item) => (
            <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300 bg-white">
              {item.image && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-primary" dir="rtl">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.nameHe}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-accent">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground" dir="rtl">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;