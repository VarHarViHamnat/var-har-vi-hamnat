const grid = document.getElementById('platserGrid');
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');
const letterButtons = document.querySelectorAll('.letter-btn');
const continentButtons = document.querySelectorAll('.continent-btn');

let valdBokstav = "ALLA";
let valdVarldsdel = "ALLA";

function renderPlatser() {
    if (!grid) return;
    
    grid.innerHTML = '';
    const filterText = searchInput ? searchInput.value.toLowerCase() : '';
    
    const sorteradeNycklar = Object.keys(platserData).sort((a, b) => 
        platserData[a].namn.localeCompare(platserData[b].namn, 'sv')
    );

    let antalTraffar = 0;

    sorteradeNycklar.forEach(id => {
        const plats = platserData[id];

        // Filtrering baserat på sökfält, bokstav och världsdel
        const matcharSok = plats.namn.toLowerCase().includes(filterText) || 
                          plats.land.toLowerCase().includes(filterText);

        const matcharBokstav = (valdBokstav === "ALLA" || plats.namn.toUpperCase().startsWith(valdBokstav));
        
        const matcharVarldsdel = (valdVarldsdel === "ALLA" || plats.varldsdel === valdVarldsdel);

        if (matcharSok && matcharBokstav && matcharVarldsdel) {
            antalTraffar++;
            const card = document.createElement('a');
            card.href = `plats.html?id=${id}`;
            card.className = 'bento-card';
            card.style.textDecoration = 'none';
            card.style.color = 'inherit';

            card.innerHTML = `
                <img src="${plats.bild}" alt="${plats.namn}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
                <span style="font-size: 0.8rem; font-weight: bold; color: #e5a93c; text-transform: uppercase;">${plats.land}</span>
                <h2 style="margin: 5px 0 8px 0;">${plats.namn}</h2>
                <p style="font-size: 0.9rem; color: #666; margin: 0;">${plats.kortBeskrivning}</p>
            `;
            grid.appendChild(card);
        }
    });

    if (antalTraffar === 0) {
        grid.innerHTML = `<div class="bento-card bento-top" style="text-align: center; grid-column: 1 / -1;"><p>Inga platser hittades med de valda filtren.</p></div>`;
    }
}

// Klickhändelser för bokstavsknappar
letterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        letterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        valdBokstav = btn.dataset.letter;
        renderPlatser();
    });
});

// Klickhändelser för världsdelar
continentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        continentButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        valdVarldsdel = btn.dataset.continent;
        renderPlatser();
    });
});

// Återställ alla filter
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        valdBokstav = "ALLA";
        valdVarldsdel = "ALLA";

        letterButtons.forEach(b => b.classList.remove('active'));
        continentButtons.forEach(b => b.classList.remove('active'));

        const allaBokstavBtn = document.querySelector('.letter-btn[data-letter="ALLA"]');
        const allaVarldsdelBtn = document.querySelector('.continent-btn[data-continent="ALLA"]');
        
        if (allaBokstavBtn) allaBokstavBtn.classList.add('active');
        if (allaVarldsdelBtn) allaVarldsdelBtn.classList.add('active');

        renderPlatser();
    });
}

// Sökfältets input-event
if (searchInput) {
    searchInput.addEventListener('input', renderPlatser);
}

// Första renderingen när sidan laddas
renderPlatser();