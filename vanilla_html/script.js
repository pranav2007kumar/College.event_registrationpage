// ===== Event Data =====
const eventsData = [
    {
        id: 'tech-1',
        title: 'Code Genesis (Hackathon)',
        image: 'bg_hackathon.png',
        category: 'technical',
        price: 500,
        venue: 'Amriteswari Hall, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'A 24-hour coding marathon building innovative solutions for real-world problems.',
        instructions: [
            "Registration & Team Formation (Day 1 - 9:00 AM)",
            "Problem Statement Reveal & Ideation Phase (10:00 AM - 12:00 PM)",
            "Continuous Coding Phase begins (12:00 PM - Day 2)",
            "Mid-point Evaluation by Mentors & Initial Pitch (Day 1 - 8:00 PM)",
            "Final Project Submission & Review (Day 2 - 10:00 AM)",
            "Final Demo and Award Ceremony (Day 2 - 2:00 PM)"
        ]
    },
    {
        id: 'tech-2',
        title: 'Robo Wars',
        image: 'bg_robotics.png',
        category: 'technical',
        price: 300,
        venue: 'Main Ground Arena, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Design, build, and deploy your combat robots in the arena. May the best machine win!',
        instructions: [
            "Bot Weight & Safety Inspections (9:00 AM)",
            "Preliminary Knockout Rounds (10:30 AM - 1:00 PM)",
            "Lunch Break & Pit Maintenance (1:00 PM - 2:00 PM)",
            "Quarter-finals Phase (2:30 PM - 4:00 PM)",
            "Semi-finals Phase (4:30 PM - 5:30 PM)",
            "Grand Finale & Prize Distribution (6:00 PM)"
        ]
    },
    {
        id: 'tech-3',
        title: 'AI Pitch Deck',
        image: 'bg_ai.png',
        category: 'technical',
        price: 200,
        venue: 'Sudhamani Hall, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Present your AI startup ideas to a panel of expert judges and investors.',
        instructions: [
            "Check-in & Slide Deck Verifications (10:00 AM)",
            "Rules Briefing by Event Coordinators (10:30 AM)",
            "First Round Pitches (3 mins Presentation + 2 mins Q&A per team) (11:00 AM)",
            "Lunch & Networking Session (1:00 PM)",
            "Top 5 Finalist Demonstrations (2:30 PM)",
            "Judge Deliberation and Winner Announcement (4:00 PM)"
        ]
    },
    {
        id: 'cult-1',
        title: 'Rhythm of State (Dance)',
        image: 'bg_dance.png',
        category: 'cultural',
        price: 250,
        venue: 'Main Auditorium, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Showcase your choreography and sync in this massive inter-college dance face-off.',
        instructions: [
            "Stage Marking & Audio Check (8:00 AM - 10:00 AM)",
            "Solo & Duo Performance Preliminary Rounds (10:30 AM)",
            "Group Dance Preliminary Rounds (1:00 PM)",
            "Shortlisting & Finalist Announcement (3:30 PM)",
            "Grand Finale Performances (5:00 PM)",
            "Results & Award Ceremony (7:30 PM)"
        ]
    },
    {
        id: 'cult-2',
        title: 'Battle of Bands',
        image: 'bg_music.png',
        category: 'cultural',
        price: 600,
        venue: 'Open Air Theatre (OAT), Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Live music competition featuring the most electrifying bands from universities across the state.',
        instructions: [
            "Instrument Setup & Sound Check Phase (2:00 PM - 4:00 PM)",
            "Band Briefing & Running Order Announcement (4:30 PM)",
            "Phase 1: Original Composition Performances (5:00 PM)",
            "Phase 2: Popular Cover Performances (6:30 PM)",
            "Headline Guest Performance while judges deliberate (8:00 PM)",
            "Announcement of the Ultimate Victor (9:30 PM)"
        ]
    },
    {
        id: 'cult-3',
        title: 'Theatrics (Drama)',
        image: 'bg_drama.png',
        category: 'cultural',
        price: 150,
        venue: 'Seminar Hall 1, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Perform monologues, short plays, or mime acts. Express yourself on the grand stage.',
        instructions: [
            "Team Registration & Prop Check (9:00 AM)",
            "Mime & Short Skits Round (10:00 AM)",
            "Solo Monologue Performances (12:30 PM)",
            "Full-length Theatrical Acts (2:00 PM)",
            "Evaluation based on Acting, Script, and Stage Presence (4:30 PM)",
            "Final Awards Presentation (5:30 PM)"
        ]
    },
    {
        id: 'sport-1',
        title: 'Hoop Dreams (Basketball)',
        image: 'bg_basketball.png',
        category: 'sports',
        price: 400,
        venue: 'Campus Basketball Courts, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: '5v5 Basketball tournament. Knockout stages leading up to the grand finals.',
        instructions: [
            "Team Verification & Match Fixtures Release (8:00 AM)",
            "Preliminary Matches - Pool A (9:00 AM)",
            "Preliminary Matches - Pool B (11:00 AM)",
            "Quarter Finals Play-offs (2:00 PM)",
            "Semi Finals (4:00 PM)",
            "Grand Final Match & Trophy Presentation (6:00 PM)"
        ]
    },
    {
        id: 'sport-2',
        title: 'FIFA E-Sports League',
        image: 'bg_esports.png',
        category: 'sports',
        price: 200,
        venue: 'Computer Science Block Labs, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: '1v1 FIFA console tournament. Prove your skills on the virtual pitch.',
        instructions: [
            "Player Check-in & Console Allocation (9:00 AM)",
            "Group Stage Matches (Round Robin Format) (10:00 AM)",
            "Lunch Break (1:00 PM)",
            "Round of 16 & Quarter Finals (Knockout Format) (2:00 PM)",
            "Semi Finals (Best of 3) (4:00 PM)",
            "Grand Finals (Best of 5) & Crowning (5:30 PM)"
        ]
    },
    {
        id: 'sport-3',
        title: 'Gully Cricket',
        image: 'bg_cricket.png',
        category: 'sports',
        price: 350,
        venue: 'Hostel Grounds, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'A nostalgic short-pitch cricket tournament played with a tennis ball.',
        instructions: [
            "Pitch Inspection & Toss for Preliminary Matches (8:30 AM)",
            "Morning Session Matches (5 Overs per innings) (9:00 AM)",
            "Mid-day Session Matches (12:00 PM)",
            "Quarter Finals (7 Overs per innings) (2:30 PM)",
            "Semi Finals (3:30 PM)",
            "Finals Under Floodlights & Prize Distribution (5:00 PM)"
        ]
    },
    {
        id: 'tech-4',
        title: 'Cyber Capture The Flag (CTF)',
        category: 'technical',
        price: 250,
        venue: 'Cybersecurity Lab, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'A jeopardy-style intense cybersecurity competition where hackers break into systems to find flags.',
        instructions: [
            "System Boot and Rules Briefing (9:00 AM)",
            "Round 1: Web Exploitation & Cryptography Phase (10:00 AM - 1:00 PM)",
            "Lunch Break (1:00 PM - 2:00 PM)",
            "Round 2: Reverse Engineering & Forensics Phase (2:00 PM - 5:00 PM)",
            "Final Scores Compilation & Flag Verification (5:30 PM)",
            "Winners Announcement (6:00 PM)"
        ]
    },
    {
        id: 'tech-5',
        title: 'Circuit Debugging',
        category: 'technical',
        price: 150,
        venue: 'ECE Block Labs, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Test your electronics knowledge by finding faults in complex hardware circuits and repairing them.',
        instructions: [
            "Components distribution & Guidelines (10:00 AM)",
            "Round 1: Written Qualifier on Circuit Theory (10:30 AM)",
            "Round 2: Visual Spotting of Hardware Anomalies (12:00 PM)",
            "Round 3: Live Soldering and Debugging Challenge (2:00 PM)",
            "Final Evaluation of Repaired Circuits (4:00 PM)",
            "Prizes Distribution (5:00 PM)"
        ]
    },
    {
        id: 'cult-4',
        title: 'Brush & Canvas (Art competition)',
        image: 'bg_art.png',
        category: 'cultural',
        price: 100,
        venue: 'AB2 Quadrangle, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Express your artistic soul through an open-theme painting and sketching competition.',
        instructions: [
            "Canvas and Easel distribution (9:00 AM)",
            "Theme Announcement and Concept Generation (9:30 AM)",
            "Core Painting Session begins (10:00 AM)",
            "Conclusion of painting and Cleanup (1:00 PM)",
            "Judges Walkthrough and Interpretation Phase (2:00 PM)",
            "Winner Declaration (3:30 PM)"
        ]
    },
    {
        id: 'cult-5',
        title: 'Vogue (Fashion Show)',
        image: 'bg_fashion.png',
        category: 'cultural',
        price: 800,
        venue: 'Main Ground Stage, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Strut down the runway showcasing creative apparel and aesthetic choreographies.',
        instructions: [
            "Backstage Makeup & Wardrobe Management (2:00 PM)",
            "Stage Rehearsal & Lighting Checks (4:00 PM)",
            "Introduction of Judges & Opening Act (6:30 PM)",
            "Round 1: Traditional/Ethnic Wear (7:00 PM)",
            "Round 2: Futuristic / Avant-Garde Theme (8:00 PM)",
            "Crowning of ANOKHA Fashion Icons (9:30 PM)"
        ]
    },
    {
        id: 'sport-4',
        title: 'Smash It (Badminton)',
        category: 'sports',
        price: 250,
        venue: 'Indoor Sports Complex, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'Men’s and Women’s singles/doubles fast-paced Badminton tournament.',
        instructions: [
            "Racket Verification & Fixture Chart Reveal (8:00 AM)",
            "Men's & Women's Singles Preliminary Rounds (9:00 AM)",
            "Men's & Women's Doubles Preliminary Rounds (11:30 AM)",
            "Singles Quarter and Semi-Finals (2:00 PM)",
            "Doubles Quarter and Semi-Finals (4:00 PM)",
            "Grand Finals for all divisions (6:00 PM)"
        ]
    },
    {
        id: 'sport-5',
        title: 'Checkmate (Chess Arena)',
        image: 'bg_chess.png',
        category: 'sports',
        price: 150,
        venue: 'Main Library Reading Hall, Amrita Vishwa Vidyapeetham, Coimbatore',
        desc: 'A rapid chess tournament testing endurance, strategy, and mental fortitude.',
        instructions: [
            "Registration & Board Allocations (9:30 AM)",
            "Swiss Format Round 1 & 2 (10:00 AM)",
            "Swiss Format Round 3 & 4 (11:30 AM)",
            "Lunch Break (1:00 PM)",
            "Swiss Format Round 5 & 6 (2:00 PM)",
            "Final Standings Reveal & Prize Distribution (4:00 PM)"
        ]
    }
];

// ===== DOM Elements =====
const eventGrid = document.getElementById('eventGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const eventCheckboxesContainer = document.getElementById('eventCheckboxes');
const totalFeeDisplay = document.getElementById('totalFee');
const registrationForm = document.getElementById('registrationForm');
const feedTableBody = document.getElementById('feedTableBody');
const emptyFeedMessage = document.getElementById('emptyFeedMessage');
const formMessage = document.getElementById('formMessage');

// Modal Elements
const eventModal = document.getElementById('eventModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');
const modalVenue = document.getElementById('modalVenue');
const modalInstructionsList = document.getElementById('modalInstructionsList');
const modalPrice = document.getElementById('modalPrice');
const modalRegisterBtn = document.getElementById('modalRegisterBtn');

// Registration State Array (Loads from localStorage)
let registrations = JSON.parse(localStorage.getItem('anokha_registrations')) || [];
let selectedModalEventId = null;
let selectedEventsCart = []; // Track actual selected events

// ===== Initialization =====
function init() {
    renderEventCards(eventsData);
    updateSelectedEventsUI();
    renderFeed();
    attachEventListeners();
}


// tharun start//
// ===== Render Event Cards =====
function renderEventCards(data) {
    if (data.length === 0) {
        eventGrid.innerHTML = '<p style="text-align:center;width:100%;grid-column:1/-1;color:var(--text-muted);">No events found matching your criteria.</p>';
        return;
    }

    let cardsHTML = '';
    // Use a simple loop to build the HTML for the event cards
    for (const event of data) {
        let bgStyle = '';
        let bgClass = '';

        // Handle images vs gradient classes neatly
        if (event.image) {
            bgStyle = `--bg-img: url('${event.image}')`;
        } else {
            bgClass = `${event.category}-bg`;
        }

        cardsHTML += `
        <div class="event-card ${bgClass}" style="${bgStyle}">
            <div class="card-header">
                <span class="badge ${event.category}">${event.category}</span>
            </div>
            <h3>${event.title}</h3>
            <p>${event.desc}</p>
            <div class="card-footer">
                <span class="price-tag">₹${event.price}</span>
                <button class="view-btn" onclick="openModal('${event.id}')">View Details</button>
            </div>
        </div>
        `;
    }

    eventGrid.innerHTML = cardsHTML;
}

// ===== Search and Filter Logic =====
function filterEvents() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = eventsData.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) || event.desc.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || event.category === category;
        return matchesSearch && matchesCategory;
    });

    renderEventCards(filtered);
}
// tharun end


//pranav start
// ===== Form Checkboxes & Fee Calculation =====
function updateSelectedEventsUI() {
    const listContainer = document.getElementById('selectedEventsList');
    if (!listContainer) return;

    if (selectedEventsCart.length === 0) {
        listContainer.innerHTML = '<p class=\"empty-state\" style=\"margin: 0; padding: 1rem; font-size: 0.9rem;\">No events selected yet. Browse events and click \"Register Now\".</p>';
    } else {
        let pillsHTML = '';
        // Loop through all selected events and create a simple clean box for each
        for (const ev of selectedEventsCart) {
            pillsHTML += `
            <div class="selected-event-pill">
                <span>${ev.title}</span>
                <span class="pill-price">₹${ev.price}</span>
                <button type="button" class="btn-remove-pill" onclick="removeEventFromCart('${ev.id}')">X</button>
            </div>
            `;
        }
        listContainer.innerHTML = pillsHTML;
    }
    calculateTotalFee();
}

window.removeEventFromCart = function (id) {
    selectedEventsCart = selectedEventsCart.filter(ev => ev.id !== id);
    updateSelectedEventsUI();
}

function calculateTotalFee() {
    let total = 0;
    // Standard loop to calculate the total fee
    for (const ev of selectedEventsCart) {
        total += ev.price;
    }
    totalFeeDisplay.textContent = `₹${total}`;
}
//end pranav


//start ajay
// ===== Modal Logic =====
window.openModal = function (id) {
    const event = eventsData.find(e => e.id === id);
    if (!event) return;

    selectedModalEventId = id;
    modalTitle.textContent = event.title;
    modalCategory.textContent = event.category;
    modalCategory.className = `badge ${event.category}`;
    modalDesc.textContent = event.desc;

    // Inject custom Venue and Instructions
    if (modalVenue) {
        modalVenue.innerHTML = `<strong>Venue:</strong> ${event.venue}`;
    }
    if (modalInstructionsList) {
        modalInstructionsList.innerHTML = event.instructions.map(inst => `<li>${inst}</li>`).join('');
    }

    modalPrice.textContent = `₹${event.price}`;

    eventModal.classList.add('active');
};

function closeModal() {
    eventModal.classList.remove('active');
    selectedModalEventId = null;
}

// Action inside modal to pre-check form item and scroll
modalRegisterBtn.addEventListener('click', () => {
    if (selectedModalEventId) {
        const eventToAdd = eventsData.find(e => e.id === selectedModalEventId);
        if (eventToAdd && !selectedEventsCart.some(e => e.id === selectedModalEventId)) {
            selectedEventsCart.push(eventToAdd);
            updateSelectedEventsUI();
        }
        closeModal();
        // Smooth scroll to register section
        document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
    }
});

// ===== Form Submission =====
let pendingRegistrationData = null;

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const department = document.getElementById('department').value;

    // Validation
    if (selectedEventsCart.length === 0) {
        showFormMessage('Please select at least one event to register.', 'error');
        return;
    }

    // Calculate final total iteratively
    let totalPaid = 0;
    let eventTitles = [];

    for (const ev of selectedEventsCart) {
        totalPaid += ev.price;
        eventTitles.push(ev.title);
    }

    pendingRegistrationData = {
        id: Date.now().toString(),
        name: fullName,
        department: department,
        events: eventTitles,
        total: totalPaid,
        timestamp: new Date().toISOString()
    };

    // Open Payment Page Fullscreen Overlay
    const paymentPage = document.getElementById('paymentPageFullscreen');
    const paymentAmount = document.getElementById('paymentAmountFinal');
    if (paymentPage && paymentAmount) {
        paymentAmount.textContent = `₹${totalPaid}`;
        paymentPage.style.display = 'flex';
    } else {
        // Fallback if no payment page
        confirmRegistration();
    }
});

function confirmRegistration() {
    if (!pendingRegistrationData) return;

    // Update State
    registrations.unshift(pendingRegistrationData);
    localStorage.setItem('anokha_registrations', JSON.stringify(registrations));

    // Reset Form
    registrationForm.reset();
    selectedEventsCart = [];
    updateSelectedEventsUI();

    // Close payment page if open
    const paymentPage = document.getElementById('paymentPageFullscreen');
    if (paymentPage) paymentPage.style.display = 'none';

    pendingRegistrationData = null;
    showFormMessage('Registration & Payment Successful! View the feed.', 'success');

    // Update Feed DOM without reloading
    renderFeed();
}

window.cancelPayment = function () {
    const paymentPage = document.getElementById('paymentPageFullscreen');
    if (paymentPage) paymentPage.style.display = 'none';
    pendingRegistrationData = null;
}

function showFormMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }, 4000);
}
//end ajay


//rajdeep start
// ===== Live Feed Logic =====
function renderFeed() {
    if (registrations.length === 0) {
        emptyFeedMessage.style.display = 'block';
        feedTableBody.innerHTML = '';
        return;
    }

    emptyFeedMessage.style.display = 'none';
    let feedHTML = '';

    // Simple top-level loop over registrations
    for (const reg of registrations) {
        let tagsHTML = '';

        // Inner loop over the events attended by this registrant
        for (const evName of reg.events) {
            tagsHTML += `<span class="event-tag">${evName}</span>`;
        }

        feedHTML += `
        <tr>
            <td><strong>${reg.name}</strong></td>
            <td>${reg.department}</td>
            <td>
                <div class="event-tags">
                    ${tagsHTML}
                </div>
            </td>
        </tr>
        `;
    }

    feedTableBody.innerHTML = feedHTML;
}
//rajdeep end


// ===== Event Listeners Attach =====
function attachEventListeners() {
    searchInput.addEventListener('input', filterEvents);
    categoryFilter.addEventListener('change', filterEvents);

    closeModalBtn.addEventListener('click', closeModal);

    // Escape key for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && eventModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Click outside modal to close
    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            closeModal();
        }
    });
}

// Boot up
document.addEventListener('DOMContentLoaded', init);
