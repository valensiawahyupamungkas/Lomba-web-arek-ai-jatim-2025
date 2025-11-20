const database = {
  "Asus VivoBook 15": {
    gambar: "https://static.retailworldvn.com/Products/Images/12217/301764/laptop-asus-vivobook-15-celeron-n4500-4gb-256gb-win11-a416ka-fhd422-1.jpg",
    spesifikasi: {
      "Prosesor": "Intel Core i3/i5",
      "RAM": "8GB DDR4 (onboard + slot SO-DIMM)",
      "Penyimpanan": "512GB/1TB PCIe 4.0 SSD.",
      "Layar": "15.6 FHD (1920x1080), IPS-level, 45% NTSC, 60Hz.",
      "Baterai": "42WHr.",
      "Bobot": "1.7 Kg.",
    },
    kelebihan: [
      "Harga terjangkau dan kompetitif.",
      "Opsi RAM dan SSD yang dapat di-upgrade (memiliki slot).",
      "Desain cukup ringkas dan modern."
    ],
    kekurangan: [
      "Kualitas layar pada varian dasar hanya 45% NTSC (warna kurang akurat). ",
      "Kualitas build didominasi plastik."
    ],
    varian: {
      "Core i3 / 8GB / 512GB SSD": "Mulai dari Rp 6.800.000",
      "Core i5 / 16GB / 512GB SSD (OLED)": "Mulai dari Rp 9.500.000",
    },
  },

  "Lenovo IdeaPad Slim 3": {
    gambar: "https://static.retailworldvn.com/News/0/2-845x442-56.jpg",
    spesifikasi: {
      "Prosesor": "Intel Core i7/Ryzen 5",
      "RAM": "8GB/16GB LPDDR5 (Soldered/Non-upgradable).",
      "Penyimpanan": "512GB SSD M.2 PCIe 4.0.",
      "Layar": "14 FHD (1920x1080), IPS, 300 nits, Anti-glare.",
      "Baterai": "45WHr.",
      "Bobot": "Sangat ringan (tergantung varian).",
    },
    kelebihan: [
      "Desain sangat tipis dan ringan (mobilitas tinggi).",
      "RAM LPDDR5 yang efisien daya dan cepat (pada varian tertentu). ",
      "Webcam Privacy Shutter fisik."
    ],
    kekurangan: [
      "RAM seringkali soldered (tidak bisa di-upgrade).",
      "Kualitas layar dasar kurang memukau (warna)."
    ],
    varian: {
      "Ryzen 5 / 8GB LPDDR5 / 512GB SSD": "Mulai dari Rp 7.500.000",
      "Core i7 / 16GB LPDDR5 / 1TB SSD": "Mulai dari Rp 12.000.000",
    },
  },

  "Lenovo LOQ": {
    gambar: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/573/2024/11/09/IMG_20241109_110412-1465043986.png",
    spesifikasi: {
      "Prosesor": "Intel Core i7/Ryzen 5.",
      "GPU": "NVIDIA GeForce RTX 3050/4050 (6GB GDDR6).", 
      "RAM": "8GB/12GB/16GB DDR5 (dapat di-upgrade). ",
      "Penyimpanan": "512GB SSD NVMe.",
      "Layar": "15.6 FHD (1920x1080), 144Hz, IPS. ",
      "Baterai": "60WHr.",
      "Bobot": "2.3 Kg.",
    },
    kelebihan: [
      "Refresh rate tinggi (144Hz) ideal untuk gaming",
      "GPU RTX yang mampu menjalankan game modern. ",
      "RAM dan SSD mudah di-upgrade (memiliki slot)."
    ],
    kekurangan: [
      "Bobot relatif berat (2.3 kg). ",
      "Kualitas build masih terasa mid-range."
    ],
    varian: {
      "RTX 3050 / Ryzen 5 / 8GB / 512GB SSD (15.6)": "Mulai dari Rp 11.500.000",
      "RTX 4060 / Core i7 / 16GB / 512GB SSD (16)": "Mulai dari Rp 18.000.000",
    },
  },

  "Apple Macbook M3": {
    gambar: "https://cdn.antaranews.com/cache/1200x800/2023/01/18/macbook-pro-m2-m2-max.jpg",
    spesifikasi: {
      "Prosesor": "Apple M3 Chip (CPU 8-core, GPU 8/10-core). ",
      "RAM": "8GB/16GB/24GB.",
      "Penyimpanan": "256GB/512GB SSD.",
      "Layar": "13.6 Liquid Retina (2560x1664), 500 nits, True Tone.",
      "Baterai": "52.6 Wh (hingga 15 jam web nirkabel).",
      "Port": "MagSafe 3, 2x Thunderbolt/USB 4, Audio Jack 3.5mm.",
    },
    kelebihan: [
      "Performa dan Efisiensi daya tak tertandingi di kelasnya.",
      "Kualitas build aluminium premium dan sangat tipis.",
      "Baterai sangat tahan lama."
    ],
    kekurangan: [
      "Harga sangat mahal.",
      "Port sangat terbatas (hanya 2 port).",
      "Tidak ada opsi upgrade RAM/Storage setelah pembelian."
    ],
    varian: {
      "Apple M3 / 8GB / 256GB SSD": "Mulai dari Rp 17.999.000",
      "Apple M3 / 16GB / 512GB SSD": "Mulai dari Rp 22.999.000",
    },
  },

  "Acer Aspire Slim 3": {
    gambar: "https://static.retailworldvn.com/Products/Images/12217/328030/acer-aspire-3-slim-intel-core-i3-a314-36m-34tx-silver-1.jpg",
    spesifikasi: {
      "Prosesor": "Intel Celeron N-Series / Core i3-N305",
      "RAM": "8GB LPDDR5 (Dual Channel).",
      "Penyimpanan": "512GB SSD NVMe Gen4.",
      "Layar": "14 FHD (1920x1080), Acer ComfyView.",
      "Baterai": "40Wh Li-ion.",
    },
    kelebihan: [
      "Sangat terjangkau (murah).",
      "SSD NVMe Gen4 (akses data cepat). ",
      "RAM LPDDR5 (pada varian tertentu)."
    ],
    kekurangan: [
      "Performa CPU terbatas untuk tugas dasar (Celeron/N-Series).",
      "Kualitas build dan ketahanan terasa standar."
    ],
    varian: {
      "Celeron N-Series / 8GB / 256GB SSD": "Mulai dari Rp 4.500.000",
      "Core i3-N305 / 8GB / 512GB SSD": "Mulai dari Rp 5.800.000",
    },
  },

  "HP Laptop 14s": {
    gambar: "https://www.tokozoom.com/assets/img/produk/bda1baeb573b3e7cfc7a3ecec0e3d886.jpg",
    spesifikasi: {
      "Prosesor": "AMD Ryzen 7 atau Intel Core i3",
      "RAM": "8GB/16GB DDR4-3200 MHz.",
      "Penyimpanan": "512GB PCIe NVMe SSD.",
      "Layar": "14 FHD (1920x1080), IPS, Micro-edge.",
      "Port": "1x USB-C 5Gbps, 2x USB-A 5Gbps, HDMI 1.4b.",
      "Bobot": "1.47 kg (tergantung model)..",
    },
    kelebihan: [
      "Bobot ringan dan cukup ringkas.",
      "Pilihan prosesor Ryzen/Core U-Series yang efisien.)",
    ],
    kekurangan: [
      "Varian dasar sering menggunakan layar 45% NTSC dan kecerahan rendah.",
      "Desain cenderung generik."
    ],
    varian: {
      "Core i3 / 8GB / 512GB SSD": "Mulai dari Rp 6.200.000",
      "Ryzen 7 / 16GB / 512GB SSD": "Mulai dari Rp 9.500.000",
    },
  },

  "Samsung Galaxy A06": {
    gambar: "https://techdaily.id/wp-content/uploads/2024/08/Spesifikasi-Samsung-Galaxy-A06-3.jpg",
    spesifikasi: {
      "Chipset": "Mediatek Dimensity 6300 (6nm) / Octa-Core.",
      "RAM/ROM": "4GB/6GB RAM, 128GB ROM + MicroSD",
      "Layar": "6.7 HD+ (720x1600) PLS LCD. ",
      "Baterai": "5000 mAh.",
      "Kamera": "50MP (Utama) + 2MP (Depth), 8MP (Depan).",
    },
    kelebihan: [
      "Baterai besar 5000 mAh.",
      "Sudah mendukung 5G (pada varian Dimensity).",
      "Kamera utama 50MP."
    ],
    kekurangan: [
      "Layar masih HD+ dengan panel PLS LCD.",
      "Performa dasar untuk aplikasi ringan."
    ],
    varian: {
      "4GB / 64GB": "Mulai dari Rp 1.600.000",
      "6GB / 128GB": "Mulai dari Rp 2.000.000",
    },
  },

  "IPhone 17": {
    gambar: "/gambar/hp/Iphone-17.jpg",
    spesifikasi: {
      "Chipset": "Apple A19.",
      "Layar": "LTPO Super Retina XDR OLED, Refresh Rate 120Hz",
      "RAM/ROM": "8GB RAM, 256GB/512GB.",
      "Baterai": "3692 mAh.",
      "Kamera": "48MP (Utama) + 48MP (Ultrawide), 18MP (Depan).",
    },
    kelebihan: [
      "Performa Apple A19 yang luar biasa.",
      "Kualitas kamera dan video flagship. ",
      "Layar 120Hz LTPO OLED (hemat daya)."
    ],
    kekurangan: [
      "Harga sangat premium. ",
      "Kapasitas baterai (fisik) cenderung lebih kecil dari kompetitor."
    ],
    varian: {
      "8GB / 256GB": "Mulai dari Rp 24.999.000",
      "8GB / 512GB": "Mulai dari Rp 28.999.000",
      
    },
  },

  "Google Pixel 9": {
    gambar: "https://asset-2.tribunnews.com/tribunnews/foto/bank/images/google-pixel-9-6575u5.jpg",
    spesifikasi: {
      "Chipset": "Google Tensor G4 (4nm).",
      "RAM/ROM": "12GB LPDDR5X, 128GB/256GB UFS 3.1.",
      "Layar":"6.3 OLED, 1080x2424, 120Hz.",
      "Baterai": "4500 mAh.",
      "Kamera": "50MP (Utama, OIS) + 48MP (Ultrawide). ",
    },
    kelebihan: [
      "Kualitas fotografi komputasional terbaik di kelasnya.",
      "Update Android tercepat dan fitur AI eksklusif.",
      "Desain premium dengan ketahanan IP68."
    ],
    kekurangan: [
      "Performa Tensor Chip sering panas dibanding Snapdragon flagship. ",
      "Ketersediaan dan layanan purna jual mungkin terbatas di Indonesia."
    ],
    varian: {
      "12GB / 128GB": "Mulai dari Rp 14.500.000",
      "12GB / 256GB": "Mulai dari Rp 16.000.000"
    },
  },

  "Poco F4": {
    gambar: "https://cdn1-production-images-kly.akamaized.net/Ny0uRVet-0aPIXmACMSiC0CaSKY=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4062571/original/028857000_1656036852-7a6612fe17f461a332e9a23a6d4595ec.jpg",
    spesifikasi: {
      "Chipset": "Snapdragon 870 5G (7nm).",
      "RAM/ROM": "6GB/8GB RAM, 128GB/256GB UFS 3.1.",
      "Layar":"6.67 AMOLED, 120Hz, HDR10+, Dolby Vision, 1300 nits (peak). ",
      "Baterai": "4500 mAh, 67W Turbo Charging.",
      "Kamera": "64MP (OIS) + 8MP (UW) + 2MP (Macro), 20MP (Depan).",
    },
    kelebihan: [
      "Performa Chipset Snapdragon 870 yang stabil untuk gaming.",
      "Layar AMOLED 120Hz dengan kualitas warna terbaik.",
      "Pengisian daya 67W yang sangat cepat."
    ],
    kekurangan: [
      "Chipset relatif lama (7nm). ",
      "Kualitas kamera sekunder (UW & Macro) standar."
    ],
    varian: {
      "6GB / 128GB": "Mulai dari Rp 4.999.000",
      "8GB / 256GB": "Mulai dari Rp 5.500.000",
      
    },
  },

  "Infinix Hot 50": {
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VfrAnd3JjuA7Xy2JQVhZlgXw23tHFT9vrA&s",
    spesifikasi: {
      "Chipset": "Mediatek Dimensity 6300 (6nm) / Octa-Core.",
      "RAM/ROM": "6GB RAM (hingga 16GB Extended), 256GB ROM.",
      "Baterai": "5000 mAh.",
      "Kamera": "48MP (Utama), 8MP (Depan). ",
    },
    kelebihan: [
      "RAM besar (6GB/8GB fisik + Extended RAM). ",
      "Layar 120Hz (meski resolusi HD+). ",
      "Baterai 5000 mAh dan harga sangat murah."
    ],
    kekurangan: [
      "Resolusi layar hanya HD+ (piksel terlihat). ",
      "Kualitas kamera dan build entry-level."
    ],
    varian: {
      "6GB / 128GB (Extended RAM)": "Mulai dari Rp 2.100.000",
      "8GB / 256GB (Extended RAM)": "Mulai dari Rp 2.500.000",
    },
  },

"Redmi note 14": {
    gambar: "https://gadgetup.id/wp-content/uploads/2025/01/redmi-note-14-5g.webp",
    spesifikasi: {
      "Chipset": "MediaTek Dimensity 7025-Ultra (6nm).",
      "RAM/ROM": "8GB/12GB RAM, 256GB/512GB.",
      "Baterai": "5110 mAh, 45W Turbo Charging.",
      "Kamera": "108MP (OIS) + 8MP (UW) + 2MP (Macro).",
    },
    kelebihan: [
      "Kamera Utama 108MP dengan OIS.",
      "Layar AMOLED 120Hz dengan kecerahan tinggi.",
      "Ketahanan IP64 (anti cipratan).",
      "Baterai besar dan pengisian cepat 45W."
    ],
    kekurangan: [
      "Bloatware (aplikasi bawaan) yang mungkin banyak.",
      "Performa CPU Dimensity mid-range (bukan flagship)."
    ],
    varian: {
      "8GB / 256GB": "Mulai dari Rp 3.800.0300",
      "12GB / 512GB": "Mulai dari Rp 4.800.000",
      
    },
  },

"Rog Phone 7": {
    gambar: "https://dlcdnwebimgs.asus.com/files/media/C4512AF4-88A1-4B0E-91F7-BE550046216F/v1.1/features/images/large/1x/animation/kv/phone_right.png",
    spesifikasi: {
      "Chipset": "Snapdragon 8 Gen 2 (4nm).",
      "RAM/ROM": "12GB/16GB LPDDR5X, 256GB/512GB UFS 4.0.",
      "layar":"6.78 AMOLED, 165Hz, HDR10+, 1500 nits (peak), Gorilla Glass Victus.",
      "Baterai": "6000 mAh, 65W Fast Charging.",
      "Kamera": "50MP (Utama) + 13MP (UW) + 5MP (Macro).",
    },
    kelebihan: [
      "Performa gaming paling ekstrem (SD 8 Gen 2, 165Hz).",
      "Fitur AirTriggers dan sistem pendinginan canggih.",
      "Baterai jumbo 6000 mAh."
    ],
    kekurangan: [
      "Sangat besar dan berat (239 gram).",
      "Desain sangat niche (gaming).",
      "Kualitas kamera foto standar flagship (bukan yang terbaik)."
    ],
    varian: {
      "12GB / 256GB": "Mulai dari Rp 12.999.000",
      "16GB / 512GB": "Mulai dari Rp 15.999.000",
      
    },
  },

  "iPad 10th Gen": {
    gambar: "https://m.media-amazon.com/images/G/01/apple/AMZ_CompareChart_iPad_10_Gen._CB607992322_.png",
    spesifikasi: {
      "Chipset": "Apple A14 Bionic (CPU 6-core, GPU 4-core). ",
      "RAM/ROM": "4GB , 64GB/256GB",
      "Baterai": "3692 mAh.",
      "layar":"10.9 Liquid Retina (2360x1640), True Tone.",
      "Kamera": "12MP (Belakang), 12MP Ultrawide (Depan, Landscape). ",
      "port":"USB-C.",
    },
    kelebihan: [
      "Chip A14 Bionic menjamin performa yang sangat cepat dan long-lasting.",
      "iPadOS dengan ekosistem aplikasi yang matang.",
      "Kamera depan diletakkan di sisi landscape (ideal untuk video call)."
    ],
    kekurangan: [
      "Aksesori (Apple Pencil 1, Magic Keyboard Folio) dijual terpisah dan mahal.",
      "Tidak ada refresh rate tinggi (maks 60Hz)."
    ],
    varian: {
      "4GB / 64GB (Wi-Fi Only)": "Mulai dari Rp 7.599.000",
      "8GB / 256GB (Wi-Fi + Cellular)": "Mulai dari Rp 13.999.000",
    },
  },

  "Huawei MatePad SE": {
    gambar: "/gambar/tablet/huawei.jpg",
    spesifikasi: {
      "Chipset": "Kirin 710A (14nm).",
      "RAM/ROM": "3GB/4GB RAM, 32GB/64GB/128GB ROM + MicroSD.",
      "Baterai": "5100 mAh, 10W Charging.",
      "Layar": "10.1 IPS LCD, 1200x1920.",
      "Kamera": "5MP (Belakang), 2MP (Depan). ",
    },
    kelebihan: [
      "Layar resolusi tinggi (1200x1920).",
      "Harga sangat terjangkau.",
    ],
    kekurangan: [
      "Tidak memiliki layanan Google (GMS) secara out-of-the-box.",
      "Chipset Kirin 710A relatif lambat."
    ],
    varian: {
      "4GB / 64GB (Wi-Fi)": "Mulai dari Rp 2.500.000",
      "4GB / 128GB (LTE)": "Mulai dari Rp 3.200.000",
      
    },
  },

  "Infinix XPAD 4G": {
    gambar: "/gambar/tablet/kingfinix.jpg",
    spesifikasi: {
      "Chipset": "Octa-core",
      "RAM/ROM": "4GB RAM, 256GB ROM + MicroSD.",
      "Baterai": "7000-8000 mAh ",
      "Layar": "10.4 IPS LCD, 1200x2000. ",
      "Kamera": "13MP (Belakang), 8MP (Depan).",
    },
    kelebihan: [
      "Konektivitas 4G LTE.",
      "Penyimpanan internal besar (256GB) di kelasnya.",
      "Harga sangat murah."
    ],
    kekurangan: [
      "Kualitas layar dan build standar tablet entry-level.",
      "Performa chipset sangat dasar."
    ],
    varian: {
      "4GB / 256GB (4G LTE)": "Mulai dari Rp 2.800.000",
    },
  },

  "Redmi Pad SE": {
    gambar: "/gambar/tablet/redmi2.jpg",
    spesifikasi: {
      "Chipset": "Snapdragon 680 4G (6nm).",
      "RAM/ROM": "4GB/6GB RAM, 128GB eMMC 5.1 + MicroSD.",
      "Baterai": "8000 mAh.",
      "Layar": "11 IPS LCD, 90Hz Refresh Rate, 1200x1920.",
      "Kamera": "8MP (Belakang), 5MP (Depan).",
    },
    kelebihan: [
      "Layar 90Hz yang smooth di kelas harga terjangkau. ",
      "Speaker Quad Stereo dengan Dolby Atmos. ",
      "Baterai 8000 mAh yang tahan lama. "
    ],
    kekurangan: [
      "Performa Snapdragon 680 cukup standar.",
      "Jenis penyimpanan eMMC 5.1 (lebih lambat dari UFS)."
    ],
    varian: {
      "4GB / 128GB (Wi-Fi)": "Mulai dari Rp 2.499.000",
      "6GB / 128GB (Wi-Fi)": "Mulai dari Rp 2.999.000",
      
    },
  },

  "Xiaomi Pad 6": {
    gambar: "/gambar/tablet/siomi.jpg",
    spesifikasi: {
      "Chipset": "Snapdragon 870 (7nm).",
      "RAM/ROM": "8GB LPDDR5, 256GB UFS 3.1. ",
      "Baterai": "8840 mAh, 33W Fast Charging.",
      "Layar": "11 IPS LCD, WQHD+ (2880x1800), 144Hz, HDR10, Dolby Vision.",
      "Kamera": "13MP (Belakang), 8MP (Depan).",
    },
    kelebihan: [
      "Layar WQHD+ 144Hz dengan kualitas sangat tinggi. ",
      "Chipset Snapdragon 870 (performa flagship-killer). ",
      "Build quality premium (logam tipis)."
    ],
    kekurangan: [
      "Tidak ada slot MicroSD untuk ekspansi penyimpanan. ",
      "Tidak ada konektivitas 4G/5G (hanya Wi-Fi)."
    ],
    varian: {
      "8GB / 256GB (Wi-Fi)": "Mulai dari Rp 5.500.000",
    },
  },

  "Samsung Galaxy Tab S9": {
    gambar: "https://images.samsung.com/is/image/samsung/p6pim/id/2307/gallery/id-galaxy-tab-s9-plus-5g-x816-sm-x816bzaaxid-537327171",
    spesifikasi: {
      "Chipset": "Snapdragon 8 Gen 2 for Galaxy (4nm).",
      "RAM/ROM": "8GB/12GB RAM, 128GB/256GB/512GB UFS. ",
      "Baterai": "8400 mAh.",
      "Layar": "11 Dynamic AMOLED 2X, 120Hz, HDR10+, Vision Booster.",
      "Kamera": "13MP (Belakang), 12MP Ultrawide (Depan).",
      "Fitur": "IP68 Water & Dust Resistance.",
    },
    kelebihan: [
      "Layar Dynamic AMOLED 2X (terbaik di pasar tablet).",
      "Termasuk S Pen dengan latensi sangat rendah. ",
      "Tahan air dan debu (IP68). ",
      "Fitur DeX Mode untuk pengalaman seperti desktop.",
    ],
    kekurangan: [
      "Harga sangat tinggi (tablet premium).",
      "Keyboard dijual terpisah."
    ],
    varian: {
      "8GB / 128GB (Wi-Fi)": "Mulai dari Rp 13.999.000",
      "12GB / 256GB (5G)": "Mulai dari Rp 18.999.000",
      
    },
  },
};

const params = new URLSearchParams(window.location.search);
const nama = params.get("device");

if (database[nama]) {
    document.getElementById("nama-device").textContent = nama;
    document.getElementById("gambar").src = database[nama].gambar;

    const specContainer = document.getElementById("spesifikasi");
    specContainer.innerHTML = "";

    const varianContainer = document.getElementById("varian");
    varianContainer.innerHTML = "";
    //  Kelebihan
const listPlus = document.getElementById("kelebihan");
database[nama].kelebihan.forEach(item => {
  listPlus.innerHTML += `<li class="plus">✔ ${item}</li>`;
});

// Render Kekurangan
const listMinus = document.getElementById("kekurangan");
database[nama].kekurangan.forEach(item => {
  listMinus.innerHTML += `<li class="minus">✘ ${item}</li>`;
});

    
    Object.entries(database[nama].spesifikasi).forEach(([key, value]) => {
        specContainer.innerHTML += `
            <div class="spec-row">
                <span>${key}</span>
                <span>${value}</span>
            </div>
        `;
    });
  
    
    Object.entries(database[nama].varian).forEach(([key, value]) => {
        varianContainer.innerHTML += `
            <div class="spec-row">
                <span>${key}</span>
                <span>${value}</span>
            </div>
        `;
    });

} else {
    document.getElementById("detail-container").innerHTML = "<p>Data tidak ditemukan.</p>";
}
