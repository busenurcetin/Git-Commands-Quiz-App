let quiz_rules = [
    "Bu Test Yeterliliğinizi Ölçmenizi Amaçlar 🔥",
    "Test 65 Sorudan Oluşmaktadır.",
    "Her Bir Soruyu Cevaplamak İçin 20 Saniyeniz Var⏳",
    "Cevapladıktan Sonra Cevap Değiştirilemez 🚫",
    "Doğru Cevaplar İçin Puan Alacaksınız ✅",
    "Hazırsanız, Butona Tıklayarak Başlayabilirsiniz 👇",
];


let quiz_questions = [
    // question 1
    {
        // question
        question: " Repository Ne Anlama Gelir?",

        // options
        options : [
            "Proje dosyalarının versiyon kontrolü için kullanılan bir depodur. Bu depo değişiklikleri kaydederek bir projenin tarihçesini tutar.",
            "Projenin tüm sürümlerini ve değişikliklerinin ismidir",
            "Bir projenin farklı sürümlerinin ayrıntılı bir şekilde takip edilmesini sağlar.",
            "Lokal bilgisayarda yaptığımız değişiklikleri uzak sunucudaki bir Git deposuna yüklememizi sağlayan bir Git komutudur.",
        ],

        // correct answer
        answer: 1,
    },
    
    {
        // write yout question here
        question: " Commit Ne Anlama Gelir?",
    
        options: [
            "Bir projenin farklı sürümlerinin ayrıntılı bir şekilde takip edilmesini sağlar.",
            "Projenin tüm sürümlerini ve değişikliklerinin ismidir.",
            "Proje dosyalarının versiyon kontrolü için kullanılan bir depodur.",
            "Lokal bilgisayarda yaptığımız değişiklikleri uzak sunucudaki bir Git deposuna yüklememizi sağlayan bir Git komutudur.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Branch Ne Anlama Gelir?",
    
        options: [
            "Projenin tüm sürümlerini ve değişikliklerinin ismidir.",
            "Lokal bilgisayarda yaptığımız değişiklikleri uzak sunucudaki bir Git deposuna yüklememizi sağlayan bir Git komutudur.",
            "Proje dosyalarının versiyon kontrolü için kullanılan bir depodur.",
            "Bir projenin farklı sürümlerinin ayrıntılı bir şekilde takip edilmesini sağlar.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 4,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Push Ne Anlama Gelir?",
    
        options: [
            "Projenin tüm sürümlerini ve değişikliklerinin ismidir.",
            "Lokal bilgisayarda yaptığımız değişiklikleri uzak sunucudaki bir Git deposuna yüklememizi sağlayan bir Git komutudur.",
            "Proje dosyalarının versiyon kontrolü için kullanılan bir depodur.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Fetch Ne Anlama Gelir?",
    
        options: [
            "Mevcut çalışma kopyasının işaretçisidir ve tipik olarak son commit'tir.",
            "Mevcut değişiklikleri geçici olarak kaydetmek için kullanılan bir özelliktir.",
            "Uzak bir depodaki tüm değişiklikleri yerel depoya indirmenin bir yoludur.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Head Ne Anlama Gelir?",
    
        options: [
            "Belirli bir commit'i işaret etmek için kullanılan bir işaretçidir.",
            "Mevcut çalışma kopyasının işaretçisidir ve tipik olarak son commit'tir.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Stash Ne Anlama Gelir?",
    
        options: [
            "Uzak bir depodaki tüm değişiklikleri yerel depoya indirmenin bir yoludur.",
            "Mevcut değişiklikleri geçici olarak kaydetmek için kullanılan bir özelliktir.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Tag Ne Anlama Gelir?",
    
        options: [
            "Belirli bir commit'i işaret etmek için kullanılan bir işaretçidir.",
            "Belirli bir commit'in genel adıdır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Diff Ne Anlama Gelir?",
    
        options: [
            "Dosyalar veya commit'ler arasındaki farkları gösteren bir komuttur.",
            "Mevcut çalışma kopyasının işaretçisidir ve tipik olarak son commit'tir.",
            "Belirli bir commit'i işaret etmek için kullanılan bir işaretçidir.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " Git Rebase Ne Anlama Gelir?",
    
        options: [
            "Dosyalar veya commit'ler arasındaki farkları gösteren bir komuttur.",
            "Projenin tüm sürümlerini ve değişikliklerinin ismidir.",
            "Bir dalın tarihini başka bir dalın tarihiyle değiştirir.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " Git Conflict Ne Anlama Gelir?",
    
        options: [
            "İki farklı dalın aynı dosyalarını düzenlerken çakışma oluştuğunda ortaya çıkan bir durumdur.",
            "Lokal bilgisayarda yaptığımız değişiklikleri uzak sunucudaki bir Git deposuna yüklememizi sağlayan bir Git komutudur.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Checkout Ne Anlama Gelir?",
    
        options: [
            "Mevcut dalı, belirli bir dal veya önceki bir tarihteki bir dal gibi farklı bir dal üzerine değiştirir.",
            "Proje dosyalarının versiyon kontrolü için kullanılan bir depodur. Bu depo değişiklikleri kaydederek bir projenin tarihçesini tutar.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Collaborator Ne Anlama Gelir?",
    
        options: [
            "Projenin sahibi tarafından proje üzerinde çalışmasına izin verilen diğer kullanıcılar veya ekip üyeleridir.",
            "Projenin sahibi tarafından proje üzerinde çalışmasına izin verilmeyen diğer kullanıcılar veya ekip üyeleridir.",
            "Projenin sahibi tarafından oluşturulan projedir.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Submodule Ne Anlama Gelir?",
    
        options: [
            "Bir hata ya da sorunun hangi commit'te ortaya çıktığını belirlemek için kullanılır.",
            "Git deposu içindeki dosyalarda belirli bir metin dizesi aramak için kullanılır.",
            'Git deposundaki bir dal veya belirli bir commitin bir sıkıştırılmış arşivini oluşturmak için kullanılır.',
            'Başka bir Git deposunu mevcut projenize eklemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 4,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Amend Message Ne Anlama Gelir?",
    
        options: [
            "Varolan commit mesajını değiştirmek için kullanılır.",
            "Commit mesajını ilk kez yazmak için kullanılır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Origin Git Pull Rebase Ne Anlama Gelir?",
    
        options: [
            "False",
            "True",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Master Ne Anlama Gelir?",
    
        options: [
            "Bir Git repository'nin varsayılan branch'idir.",
            "Bir remote repository'nin varsayılan adıdır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " Remote Ne Anlama Gelir?",
    
        options: [
            "Bir remote repository'nin varsayılan adıdır.",
            "Uzak sunucudaki değişiklikleri takip etmek için kullanılan bir referanstır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Gitignore Ne Anlama Gelir?",
    
        options: [
            "Git'in takip etmesi gereken dosyaların bir listesidir.",
            "Git'in takip etmemesi gereken dosyaların bir listesidir.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Reset Ne Anlama Gelir?",
    
        options: [
            "Bir dosyanın veya değişikliğin geçmiş sürümlerine geri dönmek için kullanılır.",
            "Hatalı bir değişikliğin hangi sürümde ortaya çıktığını bulmak için kullanılır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Blame Ne Anlama Gelir?",
    
        options: [
            "Git deposunda yapılan tüm değişiklikleri kaydeden bir kayıt defteridir.",
            "Dosyaların belirli bir satırının hangi değiştirme veya sürümün yazarı olduğunu belirlemek için kullanılır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Reflog Ne Anlama Gelir?",
    
        options: [
            "Git deposunda yapılan tüm değişiklikleri kaydeden bir kayıt defteridir.",
            "Dosyaların belirli bir satırının hangi değiştirme veya sürümün yazarı olduğunu belirlemek için kullanılır.",
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " Git Alias Ne Anlama Gelir?",
    
        options: [
            'Belirli bir sürüm için anlamlı bir isim ve referans etiketi verir.',
            'Bir dosyanın veya değişikliğin geçmiş sürümlerine geri dönmek için kullanılır."',
            'Git komutlarını kısaltmak ve özelleştirmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },

    // Commands

    {
        // write yout question here
        question: " git clone Ne Anlama Gelir?",
    
        options: [
            'Uzak bir depodan değişiklikleri yerel depoya getirmemek için kullanılır.',
            'Uzak bir depodan değişiklikleri yerel depoya getirmek için kullanılır.',
            'Bir projenin uzak bir git deposundan yerel bir kopyasını almak istemiyorsanız kullanılır.',
            'Bir projenin uzak bir git deposundan yerel bir kopyasını almak istiyorsanız kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 4,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git init Ne Anlama Gelir?",
    
        options: [
            'Yerel depoda bulunan mevcut tüm dalları listelemek ve yeni dallar oluşturmak için kullanılır.',
            'Uzak bir depodan değişiklikleri yerel depoya getirmek için kullanılır.',
            'Proje dizininde .git adlı bir klasör oluşturur ve git deposunu başlatır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git add Ne Anlama Gelir?",
    
        options: [
            'Git deposunda, değiştirilmiş dosyaları izlemek ve sonraki adımda bu dosyaları bir sonraki commit işlemine dahil etmek için kullanmanız gerekir.',
            'Yerel depoda bulunan mevcut tüm dalları listelemek ve yeni dallar oluşturmak için kullanılır.',
            'Mevcut dalın değiştirilmesi ve yeni bir dalın seçilmesi için kullanılır.',
            'Farklı dalları birleştirmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " git push Ne Anlama Gelir?",
    
        options: [
            'Yaptığınız değişiklikleri, yerel depodan uzak bir git depolarına göndermek için kullanmanız gerekiyor.',
            'Uzak bir depodan değişiklikleri yerel depoya getirmek için kullanılır.',
            'Yerel depoda bulunan mevcut tüm dalları listelemek ve yeni dallar oluşturmak için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git pull Ne Anlama Gelir?",
    
        options: [
            'Farklı dalları birleştirmek için kullanılır.',
            'Mevcut dalın değiştirilmesi ve yeni bir dalın seçilmesi için kullanılır.',
            'Uzak bir depodan değişiklikleri yerel depoya getirmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git branch Ne Anlama Gelir?",
    
        options: [
            'Git deposundaki belirli bir noktayı veya belirli bir sürümü işaretlemek için kullanılır.',
            'Yerel depoda bulunan mevcut tüm dalları listelemek ve yeni dallar oluşturmak için kullanılır.',
            'print("Hello World")',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " git blame -L Ne Anlama Gelir?",
    
        options: [
            'Belirli bir satır veya satır aralığı için bir dosyanın değişiklik geçmişindeki değişiklikleri gösterir.',
            'Belirli bir tarihten sonraki değişiklikleri göstermek için kullanılır. ',
            'Yalnızca belirli bir yazarın değişikliklerini göstermek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git merge Ne Anlama Gelir?",
    
        options: [
            'İki farklı dalı birleştirmek için kullanılır.',
            'Üç farklı dalı birleştirmek için kullanılır.',
            'Böyle bir komut yok.',
            'Yanlış cevap.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git status Ne Anlama Gelir?",
    
        options: [
            'Çalışma kopyanızdaki dosyaların Git deposundaki durumunu gösterir.',
            'Mevcut Git deposundaki tüm dalları listeler.',
            'İki farklı dalı birleştirmek için kullanılır.',
            'Git deposundaki belirli bir noktayı veya belirli bir sürümü işaretlemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git show Ne Anlama Gelir?",
    
        options: [
            'Belirli bir commitin değişikliklerini geri almak için kullanılır.',
            'Git yapılandırma ayarlarını değiştirmek veya görüntülemek için kullanılır.',
            'Belirli bir Git nesnesinin (object) içeriğini göstermek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git revert Ne Anlama Gelir?",
    
        options: [
            'Bir dalın tarihçesini, başka bir dalın tarihçesiyle yeniden düzenlemek için kullanılır.',
            'Belirli bir commitin değişikliklerini geri almak için kullanılır.',
            'Git deposundan bir dosyayı silmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git cherry -pick Ne Anlama Gelir?",
    
        options: [
            'Başka bir dalda yapılan belirli bir commitin değişikliklerini, mevcut dalınıza eklemek için kullanılır. ',
            'Belirli bir Git nesnesinin (object) içeriğini göstermek için kullanılır.',
            'Başka bir Git deposunu mevcut projenize eklemek için kullanılır. ',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git RM Ne Anlama Gelir?",
    
        options: [
            'Git deposundan bir dosyayı silmek için kullanılır.',
            'Git deposuna bir dosyayı eklemek için kullanılır.',
            'Git deposunu silmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git mv Ne Anlama Gelir?",
    
        options: [
            'Git deposundaki bir dal veya belirli bir commitin bir sıkıştırılmış arşivini oluşturmak için kullanılır.',
            'Git deposu içindeki dosyalarda belirli bir metin dizesi aramak için kullanılır.',
            'Git deposunda bir dosyanın adını veya konumunu değiştirmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git grep Ne Anlama Gelir?",
    
        options: [
            'Git deposundan bir dosyayı silmek için kullanılır.',
            'Git deposu içindeki dosyalarda belirli bir metin dizesi aramak için kullanılır.',
            'Git deposuna bir dosyayı eklemek için kullanılır.',
            'Bir dalın tarihçesini, başka bir dalın tarihçesiyle yeniden düzenlemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git archive Ne Anlama Gelir?",
    
        options: [
            'Git deposundaki bir dal veya belirli bir commitin bir sıkıştırılmış arşivini oluşturmak için kullanılır.',
            'Yanlış Cevap."',
            'Yanlış Cevap.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git submodule Ne Anlama Gelir?",
    
        options: [
            'Başka bir Git deposunu mevcut projenize eklemek için kullanılır.',
            'Git deposundaki tüm HEAD referans değişikliklerini listeler.',
            'Deponun temizlenmesi için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git clean Ne Anlama Gelir?",
    
        options: [
            'Deponun temizlenmesi için kullanılır.',
            'Git deposundaki tüm HEAD referans değişikliklerini listeler.',
            'Deponuzdaki tüm nesnelerin durumunu kontrol eder ve bozuk nesneleri bulur.',
            'Uzak depodaki dalların listesini görüntülemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git fsck Ne Anlama Gelir?",
    
        options: [
            'Yeni bir dal oluşturmanızı ve o dalda çalışmanızı sağlar.',
            'Yalnızca belirli bir yazarın değişikliklerini göstermek için kullanılır. ',
            'Deponuzdaki tüm nesnelerin durumunu kontrol eder ve bozuk nesneleri bulur.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git difftool Ne Anlama Gelir?",
    
        options: [
            'Bir dalın geçmişindeki değişikliklerin sırasını değiştirmenize veya birleştirmenize olanak tanır.',
            'Git repositorydeki dosyalar arasındaki farkları görmek için kullanılan bir araçtır.',
            'Bir değişiklik yapmadan önce önce yerel deponuzu günceller ve ardından uzak depodaki değişiklikleri alır.',
            'Uzak bir depodan değişiklikleri getirirken aynı zamanda yerel depoda artık mevcut olmayan dalları siler.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git remote add Ne Anlama Gelir?",
    
        options: [
            'Git deposundaki uzak depoları yönetmek için kullanılır.',
            'Uzak depoların URLlerini de dahil ederek daha ayrıntılı bir liste gösterir.',
            'Yeni bir uzak depo ekler.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git stash pop Ne Anlama Gelir?",
    
        options: [
            'Uzak bir depo ile çalışmak için yerel bir depoya yeni bir uzak depo eklemenize olanak tanır.',
            'Depolanmış değişikliklerinizi geri yüklemek için kullanılır.',
            'Git repositorydeki dosyalar arasındaki farkları görmek için kullanılan bir araçtır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " git log — grep Ne Anlama Gelir?",
    
        options: [
            'Git tarihçesi içinde belirli bir anahtar kelime veya ifade aramak için kullanılır.',
            'Yeni dosya oluşturur.',
            'Git tarihçesini siler.',
            'Git tarihçesine darbe yapar.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " git blame — date Ne Anlama Gelir?",
    
        options: [
            'Belirli bir dosyadaki her satırın kim tarafından yapıldığını ve değiştirildiğini, hangi tarihte değiştirildiğini gösteren bir çıktı verir.',
            'Böyle bir komut yok.',
            'Hiçbir işe yaramaz.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " git push — force Ne Anlama Gelir?",
    
        options: [
            'Uzak bir dalı güncellemek için kullanılır.',
            'Uzak bir dalı silmek için kullanılır.',
            'Uzak bir dalı eklemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
        {
        // write yout question here
        question: " git tag -d Ne Anlama Gelir?",
    
        options: [
            'Bir değişiklik yapmadan önce önce yerel deponuzu günceller ve ardından uzak depodaki değişiklikleri alır.',
            'Bir dalın geçmişindeki değişikliklerin sırasını değiştirmenize veya birleştirmenize olanak tanır.',
            'Yerel bir etiketi (tag) silmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git merge — squash Ne Anlama Gelir?",
    
        options: [
            'Birleştirme yapar.',
            'Birleştirme işlemi yaparken, birleştirilen dalların tüm geçmişini tek bir commit olarak sıkıştırır.',
            'Silme yapar.',
            'Çalışma kopyanızdaki dosyaların Git deposundaki durumunu gösterir.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git revert — no-commit Ne Anlama Gelir?",
    
        options: [
            'Bir değişikliği geri alırken size değişikliğinizi istediğiniz gibi düzenleme fırsatı verir.',
            'Bir değişikliği geri alır.',
            'Yerel bir etiketi (tag) silmek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git tag -a Ne Anlama Gelir?",
    
        options: [
            'Bir dalın geçmişindeki değişikliklerin sırasını değiştirmenize veya birleştirmenize olanak tanır.',
            'Bir belirteci (tag) imzalayarak belirli bir sürümü işaretlemenizi sağlar.',
            'Bir dalı diğerine birleştirirken hiyerarşiyi koruyarak bir kayıt oluşturur.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git rebase -i Ne Anlama Gelir?",
    
        options: [
            'Mevcut dalınızın başka bir dalıyla karşılaştırarak, henüz kaydedilmemiş olan değişikliklerinizi gösterir.',
            'Bir dalın geçmişindeki değişikliklerin sırasını değiştirmenize veya birleştirmenize olanak tanır.',
            'Uzak bir dalı güncellemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git merge — no-ff Ne Anlama Gelir?",
    
        options: [
            'Belirli bir tarihten sonraki değişiklikleri göstermek için kullanılır.',
            'Yeni bir dal oluşturmanızı ve o dalda çalışmanızı sağlar.',
            'Son bir değişikliği mevcut bir değişiklikle birleştirir veya son bir değişikliği düzenler.',
            'Bir dalı diğerine birleştirirken hiyerarşiyi koruyarak bir kayıt oluşturur.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 4,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git fetch — prune Ne Anlama Gelir?",
    
        options: [
            'Uzak bir depodan değişiklikleri getirirken aynı zamanda yerel depoda artık mevcut olmayan dalları siler.',
            'Son bir değişikliği mevcut bir değişiklikle birleştirir veya son bir değişikliği düzenler.',
            'Yeni bir dal oluşturmanızı ve o dalda çalışmanızı sağlar.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git decribe Ne Anlama Gelir?",
    
        options: [
            'Bir dalı diğerine birleştirirken hiyerarşiyi koruyarak bir kayıt oluşturur.',
            'Uzak bir depodan değişiklikleri getirirken aynı zamanda yerel depoda artık mevcut olmayan dalları siler.',
            'Bir belirtecin (tag) veya belirli bir dala göre en son değişiklikten sonraki en yakın belirteci (tag) gösterir.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git commit — amend Ne Anlama Gelir?",
    
        options: [
            'Son bir değişikliği mevcut bir değişiklikle birleştirir veya son bir değişikliği düzenler.',
            'Yeni bir dal oluşturmanızı ve o dalda çalışmanızı sağlar.',
            'Deponuzdaki tüm nesnelerin durumunu kontrol eder ve bozuk nesneleri bulur.',
            'Deponun temizlenmesi için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git clone — depth Ne Anlama Gelir?",
    
        options: [
            'Belirli bir tarihe kadar olan değişiklik geçmişini yalnızca indirerek bir deponun kısmi bir kopyasını oluşturmanızı sağlar.',
            'Uzak bir dalı güncellemek için kullanılır.',
            'Depolanmış değişikliklerinizi geri yüklemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git checkout -b Ne Anlama Gelir?",
    
        options: [
            'Git repositorydeki dosyalar arasındaki farkları görmek için kullanılan bir araçtır.")',
            'Gitte yeni bir dal oluştururken ve oluşturulan dal üzerinde hemen çalışmaya başlarken kullanılan bir komuttur.',
            'Uzak bir dalı güncellemek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git log — since Ne Anlama Gelir?",
    
        options: [
            'Değişiklikleri kaydeder.',
            'Yalnızca belirli bir yazarın değişikliklerini göstermek için kullanılır.',
            'Belirli bir tarihten sonraki değişiklikleri göstermek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git log — author Ne Anlama Gelir?",
    
        options: [
            'Her bir değişikliği uzunca açıklar.',
            'Her bir değişikliği tek bir satırda özetler.',
            'Yalnızca belirli bir yazarın değişikliklerini göstermek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git log — pretty Ne Anlama Gelir?",
    
        options: [
            'Değişiklik geçmişini siler.',
            'Her bir değişikliği tek bir satırda özetler.',
            'Değişiklik geçmişini farklı bir biçimde göstermenizi sağlar.',
            'Yalnızca belirli bir yazarın değişikliklerini göstermek için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 3,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git log — oneline Ne Anlama Gelir?",
    
        options: [
            'Her bir değişikliği uzunca açıklar.',
            'Her bir değişikliği tek bir satırda özetler.',
            'Değişiklikleri iptal eder.',
            'Değişiklikleri kaydeder.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 2,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git push --tags Ne Anlama Gelir?",
    
        options: [
            'Git deposundaki etiketleri uzak depoya göndermek için kullanılır.',
            'Belirli bir tarihten sonraki değişiklikleri göstermek için kullanılır.',
            'Mevcut dalınızın başka bir dalıyla karşılaştırarak, henüz kaydedilmemiş olan değişikliklerinizi gösterir.',
            'Uzak bir depo ile çalışmak için yerel bir depoya yeni bir uzak depo eklemenize olanak tanır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    {
        // write yout question here
        question: " git branch -r Ne Anlama Gelir?",
    
        options: [
            'Uzak depodaki mevcut dalların listesini göstermek için kullanılır.',
            'Çalışma kopyanızdaki dosyaların Git deposundaki durumunu gösterir.',
            'Farklı dalları birleştirmek için kullanılır.',
            'Mevcut dalın değiştirilmesi ve yeni bir dalın seçilmesi için kullanılır.',
        ],
        // correct option (1,2,3,4 etc)
        answer: 1,
    //    selected_answer:null
    },
    
    
];
