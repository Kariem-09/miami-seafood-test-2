import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Restaurant Info */}
          <div className="text-center md:text-right" dir="rtl">
            <h3 className="text-2xl font-bold mb-4">Miami</h3>
            <p className="text-lg mb-2">من قلب البحر لقلبك</p>
            <p className="opacity-90 mb-4">
              مطعم المأكولات البحرية الفاخر في قلب كفر مندا
            </p>
            <div className="space-y-2">
              <p></p>
              <p>📞 054-606-6929</p>
              <p>✉️ </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">שעות פתיחה</h4>
            <div className="space-y-2 opacity-90">
              <p>ראשון - חמישי: 12:00 - 23:00</p>
              <p>שישי - שבת: 18:00 - 24:00</p>
              <p>יום שישי בערב: סגור</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <a className="text-sm" href="https://www.google.com">f</a>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="text-sm">i</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="text-sm">w</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-75">
            © 2025 Miami Restaurant. جميع الحقوق محفوظة | כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
