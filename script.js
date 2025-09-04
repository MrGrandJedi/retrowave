// Console data
const consoles = [
  {
    id: 1,
    name: "Nintendo Entertainment System (NES)",
    year: "1985",
    image: "/nintendo-nes-console-retro-gaming.jpg",
    description:
      "The console that revived the video game industry in North America after the 1983 crash. Known for iconic games like Super Mario Bros., The Legend of Zelda, and Metroid.",
    specs: [
      "CPU: 8-bit MOS Technology 6502",
      "RAM: 2 KB",
      "Graphics: Picture Processing Unit (PPU)",
      "Sound: 5 audio channels",
    ],
    links: [
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nintendo_Entertainment_System" },
      { text: "Game Library", url: "#" },
    ],
  },
  {
    id: 2,
    name: "Super Nintendo Entertainment System (SNES)",
    year: "1990",
    image: "/super-nintendo-snes-console-retro-gaming.jpg",
    description:
      "Nintendo's 16-bit masterpiece that brought us classics like Super Mario World, The Legend of Zelda: A Link to the Past, and Super Metroid.",
    specs: ["CPU: 16-bit 65c816", "RAM: 128 KB", "Graphics: Custom PPU chips", "Sound: 8-channel ADPCM"],
    links: [
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System" },
      { text: "Game Library", url: "#" },
    ],
  },
  {
    id: 3,
    name: "Sega Genesis/Mega Drive",
    year: "1988",
    image: "/sega-genesis-mega-drive-console-retro-gaming.jpg",
    description:
      "Sega's 16-bit console that competed directly with Nintendo, featuring fast-paced games like Sonic the Hedgehog and Streets of Rage.",
    specs: ["CPU: Motorola 68000", "RAM: 64 KB", "Graphics: Yamaha YM7101 VDP", "Sound: Yamaha YM2612 + SN76489"],
    links: [
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sega_Genesis" },
      { text: "Game Library", url: "#" },
    ],
  },
  {
    id: 4,
    name: "Sony PlayStation",
    year: "1994",
    image: "/sony-playstation-1-console-retro-gaming.jpg",
    description:
      "Sony's entry into the console market that revolutionized gaming with CD-ROM technology and 3D graphics, bringing us Final Fantasy VII and Metal Gear Solid.",
    specs: ["CPU: 32-bit R3000A RISC", "RAM: 2 MB", "Graphics: Custom GPU", "Storage: CD-ROM"],
    links: [
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/PlayStation_(console)" },
      { text: "Game Library", url: "#" },
    ],
  },
  {
    id: 5,
    name: "Nintendo 64",
    year: "1996",
    image: "/nintendo-64-n64-console-retro-gaming.jpg",
    description:
      "Nintendo's 64-bit console with innovative analog control and 3D graphics. Home to legendary games like Super Mario 64, GoldenEye 007, and The Legend of Zelda: Ocarina of Time.",
    specs: ["CPU: 64-bit NEC VR4300", "RAM: 4 MB (expandable to 8 MB)", "Graphics: SGI RCP", "Storage: Cartridge"],
    links: [
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nintendo_64" },
      { text: "Game Library", url: "#" },
    ],
  },
  {
    id: 6,
    name: "Sega Dreamcast",
    year: "1998",
    image: "/sega-dreamcast-console-retro-gaming.jpg",
    description:
      "Sega's final console that was ahead of its time with built-in internet connectivity and impressive graphics. Featured innovative games like Shenmue and Jet Set Radio.",
    specs: ["CPU: Hitachi SH-4 128-bit", "RAM: 16 MB", "Graphics: PowerVR2 CLX2", "Storage: GD-ROM"],
    links: [
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dreamcast" },
      { text: "Game Library", url: "#" },
    ],
  },
]

// DOM elements
const consoleGrid = document.getElementById("consoleGrid")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navigation = document.getElementById("navigation")

// Create console card HTML
function createConsoleCard(console) {
  return `
        <div class="console-card" data-console-id="${console.id}">
            <img src="${console.image}" alt="${console.name}" class="console-image" loading="lazy">
            <h3 class="console-title">${console.name}</h3>
            <div class="console-year">${console.year}</div>
            <p class="console-description">${console.description}</p>
            <div class="console-specs">
                <h4>Technical Specifications</h4>
                <ul>
                    ${console.specs.map((spec) => `<li>• ${spec}</li>`).join("")}
                </ul>
            </div>
            <div class="console-links">
                ${console.links.map((link) => `<a href="${link.url}" class="console-link" target="_blank" rel="noopener noreferrer">${link.text}</a>`).join("")}
            </div>
        </div>
    `
}

// Render console grid
function renderConsoles() {
  if (consoleGrid) {
    consoleGrid.innerHTML = consoles.map(createConsoleCard).join("")

    // Add click event listeners to console cards
    const consoleCards = document.querySelectorAll(".console-card")
    consoleCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        // Don't trigger if clicking on a link
        if (e.target.tagName !== "A") {
          const consoleId = card.dataset.consoleId
          console.log(`[v0] Console card clicked: ${consoleId}`)
          // Add any additional click handling here
        }
      })
    })
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  navigation.classList.toggle("active")
  mobileMenuBtn.classList.toggle("active")
}

// Smooth scroll to sections
function smoothScrollTo(targetId) {
  const target = document.getElementById(targetId)
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Handle navigation clicks
function handleNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Get target section
      const targetId = link.getAttribute("href").substring(1)
      smoothScrollTo(targetId)

      // Close mobile menu if open
      if (navigation.classList.contains("active")) {
        toggleMobileMenu()
      }
    })
  })
}

// Initialize the application
function init() {
  console.log("[v0] Initializing Retro Console Hub")

  // Render consoles
  renderConsoles()

  // Setup mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }

  // Setup navigation
  handleNavigation()

  // Add scroll event listener for navbar highlighting
  window.addEventListener("scroll", () => {
    const sections = ["home", "consoles", "history", "reviews", "community", "contact"]
    const navLinks = document.querySelectorAll(".nav-link")

    let current = ""
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        const sectionTop = section.offsetTop - 100
        if (window.pageYOffset >= sectionTop) {
          current = sectionId
        }
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  console.log("[v0] Retro Console Hub initialized successfully")
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", init)

// Handle window resize for responsive behavior
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navigation.classList.contains("active")) {
    navigation.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  }
})
