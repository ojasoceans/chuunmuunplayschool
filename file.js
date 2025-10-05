// BANNER
const enrollBtn = document.getElementById("enrollBtn");
const hoverSound = document.getElementById("hoverSound");

enrollBtn.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
});

enrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
    setTimeout(() => (window.location.href = enrollBtn.href), 500);
});
//   HERO
// document.addEventListener("DOMContentLoaded", () => {
//     lottie.loadAnimation({
//         container: document.getElementById("lottie-hero"),
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: "https://assets4.lottiefiles.com/packages/lf20_1pxqjqps.json",
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    lottie.loadAnimation({
        container: document.getElementById("lottie-hero"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "json/Animation1.json",
    });
});


// GALLERY ---> button removed
const toggleBtn = document.getElementById('toggleGalleryBtn');
const extraImages = document.querySelectorAll('.extra-images');
let expanded = false;

toggleBtn.addEventListener('click', () => {
    expanded = !expanded;
    extraImages.forEach(img => img.classList.toggle('hidden'));
    toggleBtn.textContent = expanded ? 'View Less' : 'View More';
});


// TESTIMONIAL
document.addEventListener("DOMContentLoaded", () => {
    const reviews = [
        {
            name: "Ashwini Singh",
            text: "This school is awesome, my daughter studies here. Provide good kind of facilities for childrens! Best school in Gorakhpur.",
            rating: 5,
        },
        {
            name: "AK Gupta",
            text: "Awesome one ♥️",
            rating: 5,
        },
        {
            name: "Vikram Jha",
            text: "Mujhe vishwas nahi hota ki koi play school toni sasti fees main wo sari suvidha de raha hai jo bade bade branded play school moti moti feels lekar v nahi dete. Apne baachey k lite shayad isse badhiya school gorakhpur me milna Muskil hai. Thank you chunmun.",
            rating: 5,
        },
        {
            name: "Sachida Nand Singh",
            text: "Very Good",
            rating: 5,
        },
        {
            name: "rajeev nandan",
            text: "Affordable and best school for kids",
            rating: 5,
        },
        {
            name: "Shilpi Srivastava",
            text: "",
            rating: 5,
        },
        {
            name: "NISHA SINHA",
            text: "",
            rating: 5,
        },
        {
            name: "Kiran Verma",
            text: "Wonderful experience.....will recommend all to simply see it to believe it. It's simply amazing...Too low on cost and so high kn qualities 👌",
            rating: 5,
        },
        {
            name: "sanjiv sinha",
            text: "Excellent place for our little chunmuns to study and grow up.",
            rating: 5,
        },
        {
            name: "Sanjeev Kumar Sbi",
            text: "Excellent facility and very cordial and competent faculty",
            rating: 5,
        },
        {
            name: "Avinash Kumar",
            text: "Great experience. Shandar vidyalaya",
            rating: 5,
        },
        {
            name: "Abha Kumari",
            text: "Excellent school for kids. Affordable and best",
            rating: 5,
        },
        {
            name: "J K CABLES LTD",
            text: "best school for kids",
            rating: 5,
        },
        
    ];
    const container = document.getElementById("google-reviews");
    const toggleBtn = document.getElementById("toggleReviews");
    let showingAll = false;

    function renderReviews(limit = 6) {
      container.innerHTML = "";
      const visibleReviews = showingAll ? reviews : reviews.slice(0, limit);
      visibleReviews.forEach((r) => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-xl shadow-lg text-left";
        card.innerHTML = `
          <div class="font-semibold text-pink-600 mb-2">${r.name}</div>
          <div class="text-gray-700 mb-1">${r.text}</div>
          <div class="text-yellow-400">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
        `;
        container.appendChild(card);
      });
    }

    renderReviews();

    toggleBtn.addEventListener("click", () => {
      showingAll = !showingAll;
      renderReviews();
      toggleBtn.textContent = showingAll ? "View Less" : "View More";
    });
  });


//   TIMINGS
// document.addEventListener("DOMContentLoaded", () => {
//     const statusBadge = document.getElementById("statusBadge");
//     const holidayList = document.getElementById("holidayList");

//     const now = new Date();
//     const day = now.getDay(); // 0 = Sunday
//     const hour = now.getHours();
//     const todayStr = now.toISOString().split("T")[0];

//     const holidays = [
//         { date: "2025-04-14", name: "Ambedkar Jayanti" },
//         { date: '2025-05-01', name: 'Labour Day' },
//         { date: '2025-08-15', name: 'Independence Day' },
//         { date: '2025-10-02', name: 'Gandhi Jayanti' },
//         { date: '2025-12-25', name: 'Christmas Day' },
//     ];

//     // Populate Holiday List
//     holidays.forEach((h) => {
//         const li = document.createElement("li");
//         li.innerHTML = `<strong>${h.name}</strong> – ${new Date(
//             h.date
//         ).toDateString()}`;
//         holidayList.appendChild(li);
//     });

//     // Check if today is a national holiday
//     const isHolidayToday = holidays.some((h) => h.date === todayStr);

//     // Logic for "Open Now" / "Closed"
//     let isOpen = false;
//     if (!isHolidayToday && day !== 0 && hour >= 9 && hour < 13) {
//         isOpen = true;
//     }

//     statusBadge.innerHTML = isOpen
//         ? '<img src="images/open.png" class="inline h-5 mr-2">Open Now'
//         : '<img src="images/closed.png" class="inline h-5 mr-2">Closed Now';

//     statusBadge.classList.add(isOpen ? "bg-green-500" : "bg-red-500");
// });
document.addEventListener("DOMContentLoaded", () => {
  const statusBadge = document.getElementById("statusBadge");
  const holidayList = document.getElementById("holidayList");
  const holidayTitle = document.getElementById("holidayTitle");

  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth(); // 0 = January

  // Summer Vacation: closed till 29th June
  const isSummerVacation = currentMonth === 5 && currentDate <= 29;

  // National holidays list
  const holidays = [
    { date: "2025-07-06", name: "Muharram" },
    { date: "2025-08-15", name: "Independence Day" },
    { date: "2025-08-27", name: "Ganesh Chaturthi" },
    { date: "2025-09-29", name: "Dussehra (Saptmi)" },
    { date: "2025-10-02", name: "Gandhi Jayanti / Dussehra" },
    { date: "2025-10-20", name: "Choti Diwali" },
    { date: "2025-10-21", name: "Diwali" },
    { date: "2025-10-22", name: "Govardhan Puja" },
    { date: "2025-10-23", name: "Bhai Dooj" },
    { date: "2025-10-28", name: "Chhath Puja" },
    { date: "2025-11-05", name: "Guru Nanak Jayanti" },
    { date: "2025-12-25", name: "Christmas Day" },
  ];

  // Filter future holidays
  const upcomingHolidays = holidays
    .filter(h => h.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date));

  // Clear list before populating
  holidayList.innerHTML = "";

  // If there are upcoming holidays, show only the next one
  if (upcomingHolidays.length > 0) {
    const next = upcomingHolidays[0];
    const li = document.createElement("li");
    li.innerHTML = `<strong>${next.name}</strong> – ${new Date(next.date).toDateString()}`;
    holidayList.appendChild(li);

    // Optionally show a clickable element to view all holidays (extendable)
    const expandBtn = document.createElement("button");
    expandBtn.innerText = "Show All Holidays";
    expandBtn.className = "mt-2 text-blue-500 text-sm";
    holidayList.appendChild(expandBtn);

    const fullList = document.createElement("ul");
    fullList.className = "mt-2 text-sm space-y-1 hidden";
    upcomingHolidays.forEach(h => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${h.name}</strong> – ${new Date(h.date).toDateString()}`;
      fullList.appendChild(li);
    });
    holidayList.appendChild(fullList);

    expandBtn.addEventListener("click", () => {
      fullList.classList.toggle("hidden");
      expandBtn.innerText = fullList.classList.contains("hidden") ? "Show All Holidays" : "Hide Holidays";
    });
  } else {
    holidayList.innerHTML = "<li>No upcoming holidays.</li>";
  }

  // Determine open status
  const isHolidayToday = holidays.some(h => h.date === todayStr);
  let isOpen = false;

  if (isSummerVacation) {
    isOpen = false;
  } else if (!isHolidayToday && day !== 0 && hour >= 9 && hour < 13) {
    isOpen = true;
  }

  // Set status badge
  statusBadge.innerHTML = isOpen
    ? '<img src="images/open.png" class="inline h-5 mr-2">Open Now'
    : isSummerVacation
    ? '<img src="images/closed.png" class="inline h-5 mr-2">Closed for Summer Vacations (Till- 29th June, 2025)'
    : '<img src="images/closed.png" class="inline h-5 mr-2">Closed Now';

  statusBadge.classList.add(isOpen ? "bg-green-500" : "bg-red-500");
});



// Lottie Hero Animation
// document.addEventListener("DOMContentLoaded", () => {
//     lottie.loadAnimation({
//         container: document.getElementById("lottie-hero"),
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: "https://assets5.lottiefiles.com/packages/lf20_yejz2cqn.json", // Replace with your Lottie animation JSON URL
//     });
// });

// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const age = parseFloat(form.age.value.trim());
        const message = form.message.value.trim();

        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers

        if (!name || !phone || isNaN(age) || !message) {
            alert("Please fill in all fields.");
            return;
        }
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
        if (age < 2.5 || age > 7) {
            alert("Child's age must be between 2.5 and 7 years.");
            return;
        }
        try {
            const res = await fetch(
                "https://formsubmit.co/ajax/YOUR_EMAIL@example.com", //replace with your mail
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ name, phone, age, message }),
                }
            );

            const data = await res.json();
            if (data.success === "true") {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting form.");
        }
    });
});
document.getElementById("phone").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
});



//Lazy-load Gallery Images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#gallery img");
    images.forEach((img) => {
        img.setAttribute("loading", "lazy");
    });
});


