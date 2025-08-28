What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: ১।getElementById = এর মাধ্যমে একটা নির্দিষ্ট  এবং সবার থেকে ইউনিক Element সিলেক্ট করা যায় যা দ্রুত এক্সেস করা যায়।

    ২। getElementsByClassName = এর মাধ্যমে নির্দিষ্ট Class নাম এর সবগুলো Element কে এক সাথে এক্সেস করা যায়। এতে কাজের সময় কম লাগে এবং এক সাথে অনেকগুলো Element নিয়ে কাজ করা যায়।

    ৩। querySelector = এটা অনেকটা css এর মতো। css সিলেক্টর দিয়ে এক্সেস করে থাকে আর শুধু মাত্র প্রথম Element কে নিয়েই কাজ করা যায়।

    ৪। querySelectorAll = এটাও css সিলেক্টর দিয়ে এক্সেস করে কিন্তু প্রথম বা একটা নিয়ে কাজ করে না শুধু । এটা দিয়ে css সিলেক্টর এর মাধ্যমে সব element এক্সেস করা যায় ।



How do you create and insert a new element into the DOM?

ans: ১। প্রথমেই আমি document.createElement() ব্যবহার করে একটা Element বানাবো।
    ২। এরপর সেই Element এর ভিতর প্রোয়োজন অনুযাই কনটেন্ট বা স্টাইল এড করবো।
    ৩। এরপর যেখানে এড করা প্রোয়োজন সেখানে appendChild() করে এড করে দিবো। 




What is Event Bubbling and how does it work?

    ans: এটা এমন একটি প্রসেস যেখানে কোনো ইভেন্ট হলে সেখানে প্রথমে হ্যন্ডল হয় তারপর তার parent element এ হ্যান্ডল হয়, তারপর তার parent element এ হ্যান্ডল হয়। এভাবেই উপরের দিকে উঠে থাকে। মূলত event শুরু হয়ে নিচ থেকে উপরের দিকে উঠতে থাকে।



What is Event Delegation in JavaScript? Why is it useful?

    ans: ১। Event Delegation এ child element এ আলাদা আলাদা eventListener না বসিয়ে একদম parent element এ বসিয়ে দেয়া হয় ।

        ২। element হ্যান্ডল করা সহজ হয় ।
        ৩। code ছোট ও গোছানো থাকে দেখতেও ভালো লাগে।




What is the difference between preventDefault() and stopPropagation() methods?

ans: preventDefault() = ১। এটা default behavior বন্ধ করে দেয়।
                        ২। এর জন্যে event bubbling করতে সমস্যা হয় না ।


    stopPropagation() = ১। এটাও default behavior বন্ধ করে দেয়।
                        ২। এটা event bubbling করতে দেয় না । parent এ যাওয়া অফ হয়ে যায়।