
import React from 'react';
import { GuideCard } from './components/GuideCard';
import { VercelIcon, NetlifyIcon, GitHubIcon, AWSIcon, ConceptIcon } from './components/Icons';
import type { DeploymentOption } from './types';

const recommendedOptions: DeploymentOption[] = [
  {
    icon: <VercelIcon />,
    title: 'Vercel',
    description: 'منصة مثالية لتطبيقات React و Next.js. تتميز بالسرعة وسهولة الاستخدام والنشر التلقائي بمجرد ربط حسابك في GitHub.',
    steps: [
      'اربط حساب GitHub الخاص بك.',
      'اختر المستودع (repository) الخاص بمشروعك.',
      'عادةً ما تكتشف Vercel الإعدادات تلقائيًا.',
      'انقر على "Deploy" وفي ثوانٍ سيكون موقعك على الإنترنت!',
    ],
  },
  {
    icon: <NetlifyIcon />,
    title: 'Netlify',
    description: 'خيار ممتاز آخر يتميز بواجهة سهلة وميزات قوية مثل النماذج (Forms) و Functions. مثالي للمواقع الثابتة وتطبيقات JavaScript.',
    steps: [
      'اربط حسابك في GitHub, GitLab, أو Bitbucket.',
      'اختر المستودع الذي تريد نشره.',
      'حدد أمر البناء (مثل: `npm run build`) ومجلد المخرجات (مثل: `dist`).',
      'انشر موقعك واستمتع بالنشر المستمر (CI/CD) تلقائيًا.',
    ],
  },
];

const otherOptions: DeploymentOption[] = [
    {
        icon: <GitHubIcon />,
        title: 'GitHub Pages',
        description: 'حل مجاني ومباشر لاستضافة المشاريع البسيطة والمحافظ الشخصية (Portfolios) مباشرة من مستودعك على GitHub.',
        steps: [
            'أنشئ نسخة الإنتاج من تطبيقك (`npm run build`).',
            'ثبّت حزمة `gh-pages` للمساعدة في عملية النشر.',
            'أضف بعض الإعدادات إلى ملف `package.json`.',
            'شغّل أمر النشر (`npm run deploy`) من الطرفية (Terminal).',
        ],
    },
    {
        icon: <AWSIcon />,
        title: 'AWS Amplify',
        description: 'جزء من منظومة Amazon Web Services، يوفر حلاً قوياً ومتكاملاً لبناء ونشر واستضافة تطبيقات الويب القابلة للتطوير.',
        steps: [
            'اربط مستودع Git الخاص بك.',
            'يقوم Amplify بتحليل مشروعك وتكوين إعدادات البناء.',
            'ينشر تطبيقك على شبكة توصيل المحتوى (CDN) العالمية الخاصة بـ AWS.',
            'يمكنك إضافة خدمات أخرى بسهولة مثل المصادقة وقواعد البيانات.',
        ],
    },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans p-4 sm:p-8">
      <main className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block bg-sky-500/10 text-sky-400 py-1 px-4 rounded-full text-sm mb-4">
            دليل المطورين
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            كيف تنشر تطبيقك على الإنترنت؟
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-400">
            أنت بنيت تطبيقًا رائعًا، والآن حان الوقت لمشاركته مع العالم. هذا الدليل يشرح لك أسهل الطرق لنشر تطبيقك وجعله متاحًا للجميع من أي مكان.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2 text-white">الخيارات الموصى بها</h2>
          <p className="text-center text-slate-400 mb-8">للبدء بسرعة وسهولة، هذه المنصات هي الأفضل وتوفر خططًا مجانية ممتازة.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendedOptions.map((option) => (
              <GuideCard
                key={option.title}
                icon={option.icon}
                title={option.title}
                description={option.description}
                steps={option.steps}
              />
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2 text-white">خيارات أخرى قوية</h2>
          <p className="text-center text-slate-400 mb-8">عندما تحتاج إلى المزيد من التحكم أو تستخدم أدوات محددة.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {otherOptions.map((option) => (
              <GuideCard
                key={option.title}
                icon={option.icon}
                title={option.title}
                description={option.description}
                steps={option.steps}
              />
            ))}
          </div>
        </section>

        <section className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-4 text-sky-400"><ConceptIcon /></div>
                <h3 className="text-2xl font-bold text-white">مفاهيم أساسية يجب أن تعرفها</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
                <div>
                    <h4 className="font-bold text-sky-400 mb-2">اسم النطاق (Domain)</h4>
                    <p className="text-slate-400 text-sm">هو عنوان موقعك على الإنترنت (مثال: `google.com`). المنصات السابقة تمنحك نطاقًا فرعيًا مجانيًا، ويمكنك شراء نطاق خاص بك وربطه بسهولة.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-sky-400 mb-2">عملية البناء (Build Process)</h4>
                    <p className="text-slate-400 text-sm">هي تحويل كود React الذي كتبته إلى ملفات HTML, CSS, JavaScript ثابتة يفهمها المتصفح. الأمر `npm run build` هو المسؤول عن هذه العملية.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-sky-400 mb-2">النشر المستمر (CI/CD)</h4>
                    <p className="text-slate-400 text-sm">هو أتمتة عملية البناء والنشر في كل مرة تقوم فيها برفع تعديلات جديدة على GitHub. منصات مثل Vercel وNetlify تتكفل بهذا الأمر بالكامل.</p>
                </div>
            </div>
        </section>
      </main>

      <footer className="text-center mt-16 text-slate-500">
        <p>تم إنشاؤه لمساعدتك على إطلاق مشروعك القادم.</p>
      </footer>
    </div>
  );
};

export default App;
