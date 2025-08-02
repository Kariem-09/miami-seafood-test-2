import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CategoryModal from "@/components/CategoryModal";
import seafoodPlatter from "@/assets/seafood-platter.jpg";
import mezzeAppetizers from "@/assets/mezze-appetizers.jpg";
import seafoodPasta from "@/assets/seafood-pasta.jpg";
import categoryAppetizers from "@/assets/category-appetizers.jpg";
import categoryMains from "@/assets/category-mains.jpg";
import categoryDesserts from "@/assets/category-desserts.jpg";
import categoryBeverages from "@/assets/category-beverages.jpg";
import newMenuItem from "@/assets/IMG_5201.webp";

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
  image: string;
}

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const menuCategories: MenuCategory[] = [
    {
      title: "المقبلات",
      titleHe: "מנות ראשונות",
      image: categoryAppetizers,
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
      image: categoryMains,
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
        },
        {
          id: "7",
          name: "وجبة جديدة",
          nameHe: "מנה חדשה",
          description: "נסיון הוספת מנה",
          description: "تجربة وصف اضافي",
          price: "1 ₪",
          image: newMenuItem
        }
      ]
    },
    {
      title: "الحلويات",
      titleHe: "קינוחים",
      image: categoryDesserts,
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
      image: categoryBeverages,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="group cursor-pointer hover:shadow-elegant transition-all duration-300 bg-white/95 backdrop-blur-sm hover-scale"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="aspect-square overflow-hidden rounded-t-lg relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2" dir="rtl">
                      {category.title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {category.titleHe}
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground" dir="rtl">
                  اضغط لاستكشاف القائمة
                </p>
                <p className="text-sm text-muted-foreground">
                  לחץ לחקור התפריט
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <CategoryModal
            isOpen={!!selectedCategory}
            onClose={() => setSelectedCategory(null)}
            title={selectedCategory.title}
            titleHe={selectedCategory.titleHe}
            items={selectedCategory.items}
          />
        )}
      </div>
    </section>
  );
};

export default MenuSection;
