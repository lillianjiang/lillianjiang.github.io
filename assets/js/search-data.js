// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Featured research projects and discoveries",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-earned-an-m-a-in-astronomy-from-ut-austin-and-received-the-bov-award-for-best-second-year-defense-mortar-board",
          title: 'Earned an M.A. in Astronomy from UT Austin and received the BOV Award...',
          description: "",
          section: "News",},{id: "news-moved-from-austin-tx-to-the-west-coast-and-transferred-to-uc-santa-barbara-to-continue-my-phd-with-brendan-bowler-studying-exoplanet-formation-and-accretion",
          title: 'Moved from Austin, TX to the West Coast and transferred to UC Santa...',
          description: "",
          section: "News",},{id: "news-awarded-60-orbits-as-pi-for-hst-cycle-33-program-to-study-accretion-and-variability-in-young-substellar-companions-telescope",
          title: 'Awarded 60 orbits as PI for HST Cycle 33 program to study accretion...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-the-international-conference-on-exoplanets-and-planet-formation-in-my-hometown-shanghai-on-ab-aur-b-s-variability-and-presented-new-results-from-alma-observations-satellite",
          title: 'Gave a talk at the International Conference on Exoplanets and Planet Formation in...',
          description: "",
          section: "News",},{
        id: 'social-ads',
        title: 'Ads',
        section: 'Socials',
        handler: () => {
          window.open("https://ui.adsabs.harvard.edu/search/p_=0&q=orcid%3A0000-0003-4006-102X&sort=date%20desc%2C%20bibcode%20desc", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4006-102X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rX8Jvi8AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lillianjiang", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%79%6A%69%61%6E%67@%75%63%73%62.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_20260130.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
