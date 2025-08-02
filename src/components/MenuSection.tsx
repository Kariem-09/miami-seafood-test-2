import { Card, CardContent } from "@/components/ui/card";
import seafoodPlatter from "@/assets/seafood-platter.jpg";
import mezzeAppetizers from "@/assets/mezze-appetizers.jpg";
import seafoodPasta from "@/assets/seafood-pasta.jpg";

interface MenuItem {
  id: string;
  name: string;
  nameHe: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  titleHe: string;
  items: MenuItem[];
}

const MenuSection = () => {
  const menuCategories: MenuCategory[] = [
    {
      title: "المقبلات",
      titleHe: "מנות ראשונות",
      items: [
        {
          id: "1",
          name: "مزة البحر المتوسط",
          nameHe: "מזה ים תיכוני",
          description: "تشكيلة من الحمص والتبولة والأخطبوط المشوي",
          price: "65 ₪",
          image: mezzeAppetizers
        },
        {
          id: "2",
          name: "كاربتشيو السلمون",
          nameHe: "קרפצ'יו סלמון",
          description: "شرائح السلمون الطازج مع صلصة الليمون والشبت",
          price: "78 ₪"
        },
        {
          id: "3",
          name: "شوربة البحر",
          nameHe: "מרק דגים",
          description: "شوربة السمك الطازجة بالخضار المتوسطية",
          price: "45 ₪"
        }
      ]
    },
    {
      title: "الأطباق الرئيسية",
      titleHe: "מנות עיקריות",
      items: [
        {
          id: "4",
          name: "صينية البحر الملكية",
          nameHe: "מגש ים מלכותי",
          description: "سلمون، روبيان، ودنيس مشوي مع الخضار المتبلة",
          price: "185 ₪",
          image: seafoodPlatter
        },
        {
          id: "5",
          name: "معكرونة البحر",
          nameHe: "פסטה ים",
          description: "معكرونة طازجة مع المحار والروبيان في صلصة الكريمة",
          price: "95 ₪",
          image: seafoodPasta
        },
        {
          id: "6",
          name: "سمك السيباس المشوي",
          nameHe: "לברק צלוי",
          description: "سمك طازج مشوي مع الأعشاب البحرية وزيت الزيتون",
          price: "125 ₪"
        }
      ]
    },
    {
      title: "الحلويات",
      titleHe: "קינוחים",
      items: [
        {
          id: "7",
          name: "تيراميسو البحر",
          nameHe: "טירמיסו ים",
          description: "تيراميسو بنكهة الليمون والكريمة الطازجة",
          price: "42 ₪"
        },
        {
          id: "8",
          name: "كريم كراميل",
          nameHe: "קרם קרמל",
          description: "كريم كراميل محضر طازجاً بالفانيليا",
          price: "38 ₪"
        }
      ]
    },
    {
      title: "المشروبات",
      titleHe: "משקאות",
      items: [
        {
          id: "9",
          name: "عصير الليمون الطازج",
          nameHe: "מיץ לימון טרי",
          description: "عصير ليمون طازج مع النعناع",
          price: "18 ₪"
        },
        {
          id: "10",
          name: "القهوة التركية",
          nameHe: "קפה טורקי",
          description: "قهوة تركية أصيلة مع الحليب",
          price: "22 ₪"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            قائمة الطعام
          </h2>
          <p className="text-xl text-muted-foreground" dir="rtl">
            أطباق شهية من البحر الأبيض المتوسط
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {category.titleHe}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300 bg-white/95 backdrop-blur-sm">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;