// --- Mobile Detection Block ---
function blockMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        document.body.innerHTML = '';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#f00';
        document.body.style.fontFamily = 'Courier New, monospace';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.textAlign = 'center';
        document.body.style.padding = '20px';

        const message = document.createElement('div');
        message.innerHTML = `
            <h1>ACCESS DENIED</h1>
            <p>This terminal is not accessible on mobile devices.</p>
            <p>Please access from a suitable computer for full functionality.</p>
        `;
        document.body.appendChild(message);
        return true;
    }
    return false;
}

// --- Centralized Latest Events ---
const latestEvents = [
    { date: "2026-01-26", type: "NOTICE", description: "New personnel inducted into the Surveillance Branch." }
];

function populateLatestEvents() {
    const eventList = document.getElementById('event-list');
    if (!eventList) return;

    eventList.innerHTML = "";

    latestEvents.forEach(event => {
        const li = document.createElement('li');
        li.classList.add('event-box');
        li.innerHTML = `
            <div class="event-date"><strong>${event.date}</strong></div>
            <div class="event-type"><strong>${event.type}</strong></div>
            <div class="event-desc">${event.description}</div>
        `;
        eventList.appendChild(li);
    });
}

// --- Category Page Loader ---
function loadCategoryEntries() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (!type) return;

    const titleEl = document.getElementById('category-title');
    if (titleEl) titleEl.textContent = type.toUpperCase();

    const entries = {
        personnel: [
            {
                title: "DIRECTOR - Demian Manchegan",
                access: "granted",
                link: "entries/personnel/demian_manchegan.html"
            },
            {
                title: "RAISA – [CLASSIFIED]",
                access: "denied",
                link: null
            },
            {
                title: "RAISA – [CLASSIFIED]",
                access: "denied",
                link: null
            },
            {
                title: "RAISA – [CLASSIFIED]",
                access: "denied",
                link: null
            },
            {
                title: "RAISA – [CLASSIFIED]",
                access: "denied",
                link: null
            },
            {
                title: "RAISA – [CLASSIFIED]",
                access: "denied",
                link: null
            },
            {
                title: "RAISA – [CLASSIFIED]",
                access: "denied",
                link: null
            }
        ],
        scp: [],
        people: [],
        groups: [],
        events: [
            {
                title: "OOTA/CCOIA/SEM0125/2026",
                access: "denied",
                link: null
            }
        ]
    };

    const container = document.getElementById('entry-table');
    if (!container || !entries[type]) return;

    container.innerHTML = "";

    entries[type].forEach(entry => {
        const row = document.createElement('div');
        row.classList.add('entry-row');

        if (entry.access === "granted") {
            row.innerHTML = `
                <a href="${entry.link}" class="entry-link">
                    <span class="entry-title">${entry.title}</span>
                    <span class="entry-access"> || ACCESS GRANTED</span>
                </a>
            `;
        } else {
            row.innerHTML = `
                <div class="entry-link denied">
                    <span class="entry-title">${entry.title}</span>
                    <span class="entry-access"> || ACCESS DENIED</span>
                </div>
            `;
        }

        container.appendChild(row);
    });
}

// --- Hume Meter ---
function updateHume() {
    const min = 90;
    const max = 110;
    const range = 200;
    const value = Math.floor(Math.random() * (max - min + 1)) + min;

    const fill = document.getElementById('hume-fill');
    const text = document.getElementById('hume-value');
    if (!fill || !text) return;

    fill.style.width = `${(value / range) * 100}%`;
    text.textContent = value + ' Hm';
}

setInterval(updateHume, 3000);
updateHume();

// --- Init ---
window.addEventListener('load', () => {
    if (blockMobile()) return;
    populateLatestEvents();
    loadCategoryEntries();
});
