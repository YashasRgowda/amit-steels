"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { CONTACT } from "@/lib/constants";
import { CATALOGUE } from "@/components/sections/products/ProductsContent";

const ease = [0.16, 1, 0.3, 1];

// ─── ALL PRODUCT TECH SPECS DATA ──────────────────────────────────────────────
const PRODUCT_DETAILS = {
    "tmt-bars": {
        fullName: "TMT Bars",
        category: "Bars & Rods",
        standard: "IS 1786:2008",
        description: "Thermo Mechanically Treated (TMT) bars are high-strength reinforcement bars with a hard outer core and a soft, ductile inner core. They are the primary reinforcement material used in RCC construction. TMT bars offer excellent weldability, corrosion resistance, and earthquake resistance — making them ideal for all types of civil construction in India's seismic zones.",
        keyFeatures: [
            "Superior earthquake resistance due to high ductility",
            "Excellent weldability without pre-heating",
            "High UTS/YS ratio ensuring structural safety",
            "Corrosion resistant surface for longer life",
            "Available in Fe415, Fe500, Fe500D, Fe550 & Fe600 grades",
        ],
        grades: "Fe415 · Fe500 · Fe500D · Fe550 · Fe600",
        tableTitle: "Dimension & Properties as per IS:1786",
        tableHeaders: ["Dia (mm)", "Area (cm²)", "Wt (kg/mtr)", "Wt Range (kg/mtr)", "Mtr/MT (approx)"],
        tableRows: [
            ["8", "0.50", "0.40", "0.37 – 0.42", "2500"],
            ["10", "0.78", "0.68", "0.57 – 0.66", "1600"],
            ["12", "1.13", "0.89", "0.84 – 0.93", "1100"],
            ["16", "2.01", "1.58", "1.50 – 1.66", "630"],
            ["20", "3.14", "2.47", "2.39 – 2.54", "400"],
            ["22", "3.80", "2.99", "2.90 – 3.07", "330"],
            ["25", "4.91", "3.86", "3.74 – 3.97", "260"],
            ["28", "6.16", "4.83", "4.69 – 5.98", "200"],
            ["32", "8.04", "6.31", "6.13 – 6.51", "155"],
            ["36", "10.18", "7.99", "7.75 – 8.23", "120"],
            ["40", "12.57", "9.85", "9.57 – 10.17", "100"],
        ],
        tableNote: "Grades available: Fe415 / Fe500 / Fe500D / Fe550 / Fe600",
    },

    "ms-round-bars": {
        fullName: "MS Round Bars",
        category: "Bars & Rods",
        standard: "IS 2062:2011",
        description: "Mild Steel Round Bars are solid circular cross-section steel bars used extensively in machining, fabrication, and general engineering applications. They offer excellent machinability and weldability. Available in various grades including structural-grade mild steel and alloy steel grades for precision machined components.",
        keyFeatures: [
            "Good machinability and weldability",
            "Available in MS, EN8, EN24, EN31 grades",
            "Consistent dimensional tolerances",
            "Suitable for turning, drilling, and milling",
            "Wide diameter range 6mm to 100mm",
        ],
        grades: "MS (IS 2062) · EN8 · EN24 · EN31",
        tableTitle: "Dimension & Weight as per IS:2062",
        tableHeaders: ["Dia (mm)", "Area (cm²)", "Wt (kg/mtr)", "Mtr/MT (approx)"],
        tableRows: [
            ["6", "0.28", "0.22", "4545"],
            ["8", "0.50", "0.39", "2564"],
            ["10", "0.79", "0.62", "1613"],
            ["12", "1.13", "0.89", "1124"],
            ["16", "2.01", "1.58", "633"],
            ["20", "3.14", "2.47", "405"],
            ["25", "4.91", "3.85", "260"],
            ["32", "8.04", "6.31", "158"],
            ["40", "12.57", "9.87", "101"],
            ["50", "19.63", "15.42", "65"],
            ["63", "31.17", "24.47", "41"],
            ["80", "50.27", "39.46", "25"],
            ["100", "78.54", "61.65", "16"],
        ],
        tableNote: "Min. order: 500 kg. Custom lengths available on request.",
    },

    "ms-flat-bars": {
        fullName: "MS Flat Bars",
        category: "Bars & Rods",
        standard: "IS 2062:2011 · IS 1732",
        description: "MS Flat Bars are rectangular cross-section mild steel bars widely used in fabrication, construction, and manufacturing. They offer excellent weldability and are easy to work with. Used for making gates, grills, brackets, frames, and general structural applications.",
        keyFeatures: [
            "Excellent weldability and formability",
            "Wide range of widths and thicknesses",
            "Consistent flatness and edge quality",
            "Easy to drill, cut and bend",
            "Suitable for galvanising and painting",
        ],
        grades: "E250 (Fe410WA) · E350",
        tableTitle: "Standard Sizes as per IS:2062 / IS:1732",
        tableHeaders: ["Width (mm)", "Thickness (mm)", "Wt (kg/mtr)", "Mtr/MT (approx)"],
        tableRows: [
            ["25", "3", "0.59", "1695"],
            ["25", "5", "0.98", "1020"],
            ["32", "5", "1.26", "794"],
            ["40", "5", "1.57", "637"],
            ["50", "5", "1.96", "510"],
            ["50", "6", "2.36", "424"],
            ["65", "6", "3.06", "327"],
            ["75", "6", "3.53", "283"],
            ["75", "8", "4.71", "212"],
            ["100", "8", "6.28", "159"],
            ["100", "10", "7.85", "127"],
            ["125", "10", "9.81", "102"],
            ["150", "10", "11.78", "85"],
            ["200", "12", "18.84", "53"],
        ],
        tableNote: "Custom widths and thicknesses available. Sizes 12mm – 200mm width, 3mm – 50mm thickness.",
    },

    "binding-wire": {
        fullName: "MS Binding Wire",
        category: "Bars & Rods",
        standard: "IS 280:2006",
        description: "MS Binding Wire (Black Annealed Wire) is a soft, flexible wire used primarily in construction for tying TMT reinforcement bars together before concrete pouring. The annealing process makes it highly flexible and easy to twist by hand. Supplied in standard 25 kg coils.",
        keyFeatures: [
            "Soft and flexible — easy hand-tying",
            "Black annealed finish for corrosion resistance",
            "Strong tensile strength for secure binding",
            "Standard 25 kg coil packing",
            "Available in 18G, 20G and 22G gauges",
        ],
        grades: "Low Carbon Mild Steel (annealed)",
        tableTitle: "Gauge & Weight Specifications as per IS:280",
        tableHeaders: ["Gauge", "Dia (mm)", "Approx Wt/100m (kg)", "Coil Weight (kg)", "Mtr/Coil (approx)"],
        tableRows: [
            ["18G", "1.22", "0.93", "25", "2688"],
            ["20G", "0.91", "0.52", "25", "4808"],
            ["22G", "0.71", "0.31", "25", "8065"],
        ],
        tableNote: "All wire is black annealed. Min. order: 10 coils per gauge.",
    },

    "gi-wire": {
        fullName: "GI Wire",
        category: "Bars & Rods",
        standard: "IS 4826:1979",
        description: "Galvanised Iron (GI) Wire is hot-dip galvanised or electro-galvanised mild steel wire used in fencing, agriculture, construction, packaging and general purpose applications. The zinc coating provides excellent corrosion resistance for outdoor and industrial environments.",
        keyFeatures: [
            "Hot-dip galvanised for superior corrosion resistance",
            "High tensile strength in finer gauges",
            "Suitable for outdoor and agricultural use",
            "Available 8G to 22G",
            "Class A and Class B coating available",
        ],
        grades: "Low Carbon Mild Steel with Zinc coating",
        tableTitle: "Gauge, Diameter & Coating Specifications as per IS:4826",
        tableHeaders: ["Gauge", "Dia (mm)", "Wt/100m (kg)", "Min Zinc Coating (g/m²)", "Breaking Load (kN approx)"],
        tableRows: [
            ["8G", "4.06", "12.9", "275", "18.5"],
            ["10G", "3.25", "8.27", "275", "11.9"],
            ["12G", "2.64", "5.46", "275", "7.85"],
            ["14G", "2.03", "3.23", "200", "4.64"],
            ["16G", "1.63", "2.08", "200", "2.98"],
            ["18G", "1.22", "1.16", "150", "1.67"],
            ["20G", "0.91", "0.65", "100", "0.93"],
            ["22G", "0.71", "0.39", "100", "0.56"],
        ],
        tableNote: "Class A coating (heavier) recommended for coastal and agricultural applications.",
    },

    "ms-beams": {
        fullName: "MS Beams (I & H)",
        category: "Structural Steel",
        standard: "IS 808:1989 · IS 2062",
        description: "MS I-Beams and H-Beams (Wide Flange Beams) are structural steel sections used as primary load-bearing members in industrial buildings, sheds, bridges and mezzanine floors. I-Beams (ISMB/ISLB) have tapered flanges while H-Beams (ISWB/ISHB) have wider, parallel flanges for heavier load applications.",
        keyFeatures: [
            "High load-bearing capacity per unit weight",
            "ISMB, ISWB, ISLB, ISHB sections available",
            "Excellent weldability for fabrication",
            "Sizes from 100mm to 600mm depth",
            "Parallel flange sections (H-Beams) for heavy structures",
        ],
        grades: "E250 (Fe410WA) · E350",
        tableTitle: "ISMB Section Properties as per IS:808",
        tableHeaders: ["Designation", "Depth (mm)", "Flange Width (mm)", "Web Thickness (mm)", "Wt (kg/mtr)"],
        tableRows: [
            ["ISMB 100", "100", "75", "4.0", "8.9"],
            ["ISMB 125", "125", "75", "4.4", "13.1"],
            ["ISMB 150", "150", "80", "4.8", "14.9"],
            ["ISMB 175", "175", "90", "5.5", "19.3"],
            ["ISMB 200", "200", "100", "5.7", "25.4"],
            ["ISMB 225", "225", "110", "6.5", "31.2"],
            ["ISMB 250", "250", "125", "6.9", "37.3"],
            ["ISMB 300", "300", "140", "7.5", "46.1"],
            ["ISMB 350", "350", "140", "8.1", "52.4"],
            ["ISMB 400", "400", "140", "8.9", "61.6"],
            ["ISMB 450", "450", "150", "9.4", "72.4"],
            ["ISMB 500", "500", "180", "10.2", "86.9"],
            ["ISMB 550", "550", "190", "11.2", "103.7"],
            ["ISMB 600", "600", "210", "12.0", "122.6"],
        ],
        tableNote: "ISWB, ISLB, ISHB sections also available. Min. order: 1 MT.",
    },

    "ms-channels": {
        fullName: "MS Channels",
        category: "Structural Steel",
        standard: "IS 808:1989 · IS 2062",
        description: "MS Channels (C-Sections) are structural steel sections with a C-shaped cross section. ISMC (Indian Standard Medium-weight Channel) sections are used as purlins, columns, stringers and support structures. Parallel Flange Channels (ISSC) are also available for improved structural performance.",
        keyFeatures: [
            "C-shaped profile for versatile structural use",
            "ISMC and ISSC sections available",
            "75mm to 400mm depth range",
            "Excellent for purlins and roof structures",
            "Good weldability and machinability",
        ],
        grades: "E250 (Fe410WA) · E350",
        tableTitle: "ISMC Section Properties as per IS:808",
        tableHeaders: ["Designation", "Depth (mm)", "Flange Width (mm)", "Web Thickness (mm)", "Wt (kg/mtr)"],
        tableRows: [
            ["ISMC 75", "75", "40", "4.4", "7.14"],
            ["ISMC 100", "100", "50", "4.7", "9.56"],
            ["ISMC 125", "125", "65", "5.0", "13.1"],
            ["ISMC 150", "150", "75", "5.4", "16.8"],
            ["ISMC 175", "175", "75", "5.7", "19.1"],
            ["ISMC 200", "200", "75", "6.1", "22.1"],
            ["ISMC 225", "225", "80", "6.4", "25.9"],
            ["ISMC 250", "250", "82", "6.7", "30.4"],
            ["ISMC 300", "300", "90", "7.6", "36.3"],
            ["ISMC 350", "350", "100", "8.1", "42.7"],
            ["ISMC 400", "400", "100", "8.6", "49.4"],
        ],
        tableNote: "ISSC (parallel flange) sections available on request. Min. order: 1 MT.",
    },

    "ms-angles": {
        fullName: "MS Angles",
        category: "Structural Steel",
        standard: "IS 808:1989 · IS 2062",
        description: "MS Angles (L-Sections) are structural steel sections with an L-shaped cross section available in equal and unequal leg varieties. They are used extensively in towers, trusses, frames, supports, brackets and general fabrication. Equal angles have both legs of the same length while unequal angles have legs of different lengths.",
        keyFeatures: [
            "Equal and unequal leg sections available",
            "Size range: 20×20mm to 200×200mm",
            "Leg thickness: 3mm to 20mm",
            "Widely used in industrial and structural fabrication",
            "Excellent for welding, bolting and riveting",
        ],
        grades: "E250 (Fe410WA) · E350",
        tableTitle: "ISA Equal Angle Section Properties as per IS:808",
        tableHeaders: ["Designation", "Leg (mm)", "Thickness (mm)", "Wt (kg/mtr)", "Mtr/MT (approx)"],
        tableRows: [
            ["ISA 20×20×3", "20", "3", "0.90", "1111"],
            ["ISA 25×25×3", "25", "3", "1.14", "877"],
            ["ISA 30×30×3", "30", "3", "1.39", "719"],
            ["ISA 40×40×4", "40", "4", "2.42", "413"],
            ["ISA 50×50×5", "50", "5", "3.77", "265"],
            ["ISA 60×60×5", "60", "5", "4.54", "220"],
            ["ISA 65×65×6", "65", "6", "5.83", "172"],
            ["ISA 75×75×6", "75", "6", "6.84", "146"],
            ["ISA 75×75×8", "75", "8", "8.97", "112"],
            ["ISA 90×90×8", "90", "8", "10.88", "92"],
            ["ISA 100×100×8", "100", "8", "12.10", "83"],
            ["ISA 110×110×8", "110", "8", "13.40", "75"],
            ["ISA 130×130×10", "130", "10", "19.7", "51"],
            ["ISA 150×150×10", "150", "10", "23.0", "43"],
            ["ISA 150×150×12", "150", "12", "27.3", "37"],
            ["ISA 200×200×15", "200", "15", "45.3", "22"],
        ],
        tableNote: "Unequal angles (ISA) also available. Min. order: 1 MT.",
    },

    "ms-pipes": {
        fullName: "MS Black & GI Pipes",
        category: "Pipes & Hollow Sections",
        standard: "IS 1161 · IS 3589 · IS 4736",
        description: "MS (Mild Steel) Black Pipes and GI (Galvanised Iron) Pipes are electric resistance welded (ERW) pipes used for water supply, plumbing, scaffolding, and structural applications. MS Black pipes are used in structural and industrial applications while GI pipes are used for water supply due to the zinc coating which prevents corrosion.",
        keyFeatures: [
            "ERW (Electric Resistance Welded) construction",
            "MS Black: structural and industrial use",
            "GI: hot-dip galvanised for water supply",
            "Available in Light, Medium and Heavy grades",
            "Nominal bore ½\" to 6\"",
        ],
        grades: "MS Black (IS:1161) · GI (IS:1239 / IS:4736)",
        tableTitle: "Nominal Bore Sizes & Weights as per IS:1239",
        tableHeaders: ["NB (inch)", "OD (mm)", "Light Wt (kg/mtr)", "Medium Wt (kg/mtr)", "Heavy Wt (kg/mtr)", "Mtr/MT (Medium)"],
        tableRows: [
            ["½\"", "21.3", "0.84", "1.21", "1.44", "826"],
            ["¾\"", "26.9", "1.13", "1.56", "1.87", "641"],
            ["1\"", "33.7", "1.41", "2.00", "2.50", "500"],
            ["1¼\"", "42.4", "1.70", "2.55", "3.25", "392"],
            ["1½\"", "48.3", "1.97", "3.00", "3.85", "333"],
            ["2\"", "60.3", "2.60", "3.91", "5.03", "256"],
            ["2½\"", "76.1", "3.56", "5.29", "6.72", "189"],
            ["3\"", "88.9", "4.24", "6.35", "8.13", "158"],
            ["4\"", "114.3", "5.60", "8.22", "10.59", "122"],
            ["5\"", "139.7", "7.11", "10.17", "12.69", "98"],
            ["6\"", "165.1", "8.61", "12.15", "15.27", "82"],
        ],
        tableNote: "Light (L), Medium (M) and Heavy (H) classes available. GI pipes have hot-dip zinc coating.",
    },

    "square-hollow": {
        fullName: "Square & Rectangular Hollow Sections",
        category: "Pipes & Hollow Sections",
        standard: "IS 4923:1997",
        description: "Square Hollow Sections (SHS) and Rectangular Hollow Sections (RHS) are cold-formed, precision-welded steel tubes used in structural applications, gates, railings, furniture frames, vehicle chassis and general fabrication. They offer high strength-to-weight ratio and clean aesthetics.",
        keyFeatures: [
            "Cold-formed and precision welded",
            "Square: 20×20mm to 200×200mm",
            "Rectangular: 50×25mm to 250×150mm",
            "Wall thickness: 1.6mm to 8mm",
            "Excellent for gates, grills, and railings",
        ],
        grades: "YSt 310 · YSt 355",
        tableTitle: "SHS & RHS Standard Sizes as per IS:4923",
        tableHeaders: ["Section", "Size (mm)", "Thickness (mm)", "Wt (kg/mtr)", "Mtr/MT (approx)"],
        tableRows: [
            ["SHS", "20×20", "1.6", "0.89", "1124"],
            ["SHS", "25×25", "1.6", "1.13", "885"],
            ["SHS", "32×32", "2.0", "1.82", "549"],
            ["SHS", "40×40", "2.0", "2.31", "433"],
            ["SHS", "50×50", "2.5", "3.60", "278"],
            ["SHS", "63×63", "3.0", "5.53", "181"],
            ["SHS", "75×75", "3.0", "6.71", "149"],
            ["SHS", "100×100", "4.0", "11.90", "84"],
            ["SHS", "125×125", "4.0", "15.0", "67"],
            ["RHS", "50×25", "2.0", "2.31", "433"],
            ["RHS", "60×40", "2.5", "3.60", "278"],
            ["RHS", "75×50", "2.5", "4.51", "222"],
            ["RHS", "100×50", "3.0", "6.71", "149"],
            ["RHS", "100×75", "3.0", "8.00", "125"],
            ["RHS", "150×75", "4.0", "13.40", "75"],
            ["RHS", "200×100", "5.0", "22.30", "45"],
        ],
        tableNote: "Min. order: 500 kg. Custom sizes available on request.",
    },

    "hr-sheets": {
        fullName: "Hot Rolled Sheets & Plates",
        category: "Sheets & Plates",
        standard: "IS 2062:2011 · IS 10748",
        description: "Hot Rolled (HR) Sheets and Plates are produced by rolling steel at high temperature and are used in heavy fabrication, structural construction, machinery manufacturing, and shuttering. HR plates offer higher thickness capability and are used where cold-rolled precision is not required.",
        keyFeatures: [
            "Thickness range: 2mm to 100mm",
            "Width up to 2500mm available",
            "Suitable for heavy structural fabrication",
            "Good weldability and formability",
            "Available in grades E250 to E550",
        ],
        grades: "E250 · E300 · E350 · E410 · E450 · E550",
        tableTitle: "Thickness, Width & Weight as per IS:2062",
        tableHeaders: ["Thickness (mm)", "Width (mm)", "Wt/sq.mtr (kg)", "Remarks"],
        tableRows: [
            ["2.0", "900–1500", "15.7", "HR Sheet"],
            ["2.5", "900–1500", "19.6", "HR Sheet"],
            ["3.0", "900–2000", "23.6", "HR Sheet"],
            ["4.0", "900–2000", "31.4", "HR Sheet / Plate"],
            ["5.0", "900–2500", "39.3", "HR Plate"],
            ["6.0", "900–2500", "47.1", "HR Plate"],
            ["8.0", "1000–2500", "62.8", "HR Plate"],
            ["10.0", "1000–2500", "78.5", "HR Plate"],
            ["12.0", "1000–2500", "94.3", "HR Plate"],
            ["16.0", "1250–2500", "125.7", "HR Plate"],
            ["20.0", "1250–2500", "157.1", "HR Plate"],
            ["25.0", "1250–2500", "196.3", "HR Plate"],
            ["32.0", "1500–2500", "251.3", "HR Heavy Plate"],
            ["40.0", "1500–2500", "314.2", "HR Heavy Plate"],
            ["50.0", "1500–2500", "392.7", "HR Heavy Plate"],
        ],
        tableNote: "Standard lengths 2500mm, 5000mm, 6000mm. Custom cutting available.",
    },

    "cr-sheets": {
        fullName: "Cold Rolled Sheets",
        category: "Sheets & Plates",
        standard: "IS 513:2008",
        description: "Cold Rolled (CR) Sheets are produced by rolling HR coils at room temperature, resulting in superior surface finish, tighter dimensional tolerances and improved mechanical properties. They are used in automotive body panels, white goods (washing machines, refrigerators), precision fabrication and electrical panels.",
        keyFeatures: [
            "Superior surface finish (smooth, bright)",
            "Tight dimensional tolerances ±0.05mm",
            "Thickness: 0.3mm to 3.15mm",
            "Excellent formability for deep drawing",
            "Available in grades CR1 to CR5",
        ],
        grades: "CR1 · CR2 · CR3 · CR4 · CR5 (as per IS:513)",
        tableTitle: "CR Sheet Thickness & Tolerances as per IS:513",
        tableHeaders: ["Thickness (mm)", "Width (mm)", "Wt/sq.mtr (kg)", "Grade", "Application"],
        tableRows: [
            ["0.30", "650–1250", "2.36", "CR1/CR2", "Precision components"],
            ["0.40", "650–1250", "3.14", "CR1/CR2", "Precision components"],
            ["0.50", "700–1500", "3.93", "CR1/CR2", "Automotive / Appliances"],
            ["0.60", "700–1500", "4.71", "CR1/CR2", "Automotive / Appliances"],
            ["0.80", "700–1500", "6.28", "CR1/CR2", "General fabrication"],
            ["1.00", "900–1500", "7.85", "CR2/CR3", "General fabrication"],
            ["1.20", "900–1500", "9.42", "CR2/CR3", "Electrical panels"],
            ["1.50", "900–1650", "11.78", "CR2/CR3", "Structural panels"],
            ["2.00", "900–1650", "15.70", "CR3/CR4", "Structural panels"],
            ["2.50", "900–1650", "19.63", "CR4", "Heavy fabrication"],
            ["3.00", "1000–1650", "23.55", "CR4/CR5", "Heavy fabrication"],
            ["3.15", "1000–1650", "24.73", "CR5", "Deep drawing"],
        ],
        tableNote: "CR sheets are supplied in coil or cut-to-length sheets. Surface: dull finish or bright.",
    },

    "colour-roofing": {
        fullName: "Colour Roofing Sheets",
        category: "Sheets & Plates",
        standard: "IS 14246",
        description: "Colour Roofing Sheets (Pre-painted Galvanised Steel Sheets) are used for industrial, commercial and residential roofing applications. The base metal is galvanised or galvalume steel coated with polyester or modified polyester paint for weather resistance and aesthetics. Available in trapezoidal, corrugated and tile profiles.",
        keyFeatures: [
            "Pre-painted polyester finish for UV resistance",
            "Hot-dip galvanised base steel",
            "Trapezoidal, corrugated and tile profiles available",
            "Colours: Red, Blue, Green, Ivory, Custom RAL shades",
            "Low maintenance, lightweight, long-span coverage",
        ],
        grades: "Base metal: G350 galvanised or AZ150 galvalume",
        tableTitle: "Colour Sheet Specifications as per IS:14246",
        tableHeaders: ["Profile", "Thickness (mm)", "Effective Cover (mm)", "Wt (kg/sq.mtr)", "Max Span (mtr)"],
        tableRows: [
            ["Trapezoidal 35/150", "0.35", "1000", "3.25", "2.5"],
            ["Trapezoidal 35/150", "0.40", "1000", "3.70", "3.0"],
            ["Trapezoidal 35/150", "0.45", "1000", "4.15", "3.5"],
            ["Trapezoidal 35/150", "0.50", "1000", "4.60", "4.0"],
            ["Trapezoidal 35/150", "0.55", "1000", "5.05", "4.5"],
            ["Trapezoidal 35/150", "0.60", "1000", "5.50", "5.0"],
            ["Trapezoidal 35/150", "0.70", "1000", "6.40", "5.5"],
            ["Trapezoidal 35/150", "0.80", "1000", "7.30", "6.0"],
            ["Corrugated 17/76", "0.40", "940", "3.85", "1.8"],
            ["Corrugated 17/76", "0.50", "940", "4.75", "2.2"],
            ["Corrugated 17/76", "0.63", "940", "5.95", "2.8"],
        ],
        tableNote: "Lengths from 1.8m to 12m available. Overlap of 150mm at ends, one corrugation at sides.",
    },

    "gi-corrugated": {
        fullName: "Galvanised Corrugated Sheets",
        category: "Sheets & Plates",
        standard: "IS 277:2018",
        description: "Galvanised Corrugated Sheets (GC Sheets) are hot-dip zinc-coated mild steel sheets with a regular corrugated profile. The zinc coating provides excellent corrosion resistance for long service life in outdoor applications. Widely used for agricultural sheds, site compounds, boundary walls and low-cost roofing.",
        keyFeatures: [
            "Hot-dip zinc coating 120–275 GSM",
            "Corrugated profile for rigidity and water drainage",
            "Lightweight — easy handling and installation",
            "Standard 900mm and 1000mm cover widths",
            "Long service life in outdoor environments",
        ],
        grades: "G350 base metal · Z120 to Z275 zinc coating",
        tableTitle: "GC Sheet Specifications as per IS:277",
        tableHeaders: ["Thickness (mm)", "Coating (GSM)", "Cover Width (mm)", "Wt/sq.mtr (kg)", "Sheets/MT (6ft sheet)"],
        tableRows: [
            ["0.35", "120", "900", "3.25", "51"],
            ["0.40", "120", "900", "3.70", "45"],
            ["0.40", "120", "1000", "3.70", "45"],
            ["0.45", "150", "900", "4.15", "40"],
            ["0.45", "150", "1000", "4.15", "40"],
            ["0.50", "150", "900", "4.60", "36"],
            ["0.50", "150", "1000", "4.60", "36"],
            ["0.55", "200", "1000", "5.05", "33"],
            ["0.60", "200", "1000", "5.50", "30"],
            ["0.63", "275", "1000", "5.75", "29"],
        ],
        tableNote: "Available in 6ft (1.83m) to 12ft (3.66m) lengths. Higher coating for coastal regions.",
    },

    "gi-chain-link": {
        fullName: "GI Chain Link Fence",
        category: "Fencing & Wire Products",
        standard: "IS 2721:1979",
        description: "GI Chain Link Fencing (Diamond Mesh Fencing) is made from galvanised steel wire woven into a diamond-shaped mesh. Used for perimeter security fencing, residential boundaries, sports courts, poultry farms and agricultural land. The galvanised coating ensures long service life in outdoor environments.",
        keyFeatures: [
            "Hot-dip galvanised for corrosion resistance",
            "Diamond mesh pattern for visibility and airflow",
            "Heights: 0.9m to 3.0m",
            "Mesh openings: 25mm, 50mm, 75mm",
            "Available 10G to 16G wire gauge",
        ],
        grades: "Low Carbon GI Wire (IS:4826)",
        tableTitle: "Chain Link Fence Specifications as per IS:2721",
        tableHeaders: ["Mesh Size (mm)", "Wire Gauge", "Roll Height (m)", "Roll Length (m)", "Wt/Roll (kg approx)"],
        tableRows: [
            ["25", "16G", "0.9", "10", "8"],
            ["25", "16G", "1.2", "10", "11"],
            ["50", "14G", "0.9", "10", "14"],
            ["50", "14G", "1.2", "10", "19"],
            ["50", "14G", "1.5", "10", "23"],
            ["50", "14G", "1.8", "10", "28"],
            ["50", "12G", "1.8", "10", "38"],
            ["50", "12G", "2.4", "10", "50"],
            ["75", "10G", "1.5", "10", "38"],
            ["75", "10G", "1.8", "10", "46"],
            ["75", "10G", "2.4", "10", "61"],
            ["75", "10G", "3.0", "10", "76"],
        ],
        tableNote: "GI angle posts and accessories available separately. Coating: Z275 (hot-dip galvanised).",
    },

    "barbed-wire": {
        fullName: "Barbed Fencing Wire",
        category: "Fencing & Wire Products",
        standard: "IS 278:1978",
        description: "Barbed Fencing Wire is made from two strands of galvanised steel wire twisted together with sharp 4-point barbs at regular intervals. Used for agricultural land fencing, perimeter security of industrial sites and boundary walls. The galvanised coating ensures durability in outdoor environments.",
        keyFeatures: [
            "Double strand twisted for high tensile strength",
            "4-point barbs at 75mm–100mm spacing",
            "Hot-dip galvanised for corrosion resistance",
            "Standard 400–500m per coil",
            "Available 12G and 14G",
        ],
        grades: "Low Carbon Galvanised Wire (IS:4826)",
        tableTitle: "Barbed Wire Specifications as per IS:278",
        tableHeaders: ["Gauge", "Strand Dia (mm)", "Barb Spacing (mm)", "Barb Length (mm)", "Coil Weight (kg)", "Mtr/Coil (approx)"],
        tableRows: [
            ["12G", "2.64", "75", "12", "25", "148"],
            ["12G", "2.64", "100", "12", "25", "148"],
            ["12G", "2.64", "75", "12", "50", "296"],
            ["14G", "2.03", "75", "10", "25", "250"],
            ["14G", "2.03", "100", "10", "25", "250"],
            ["14G", "2.03", "75", "10", "50", "500"],
        ],
        tableNote: "Class A (heavier coating) recommended for coastal and agricultural use. Min. order: 10 coils.",
    },
};

// ─── All steel products flat list for sidebar ─────────────────────────────────
const ALL_STEEL_PRODUCTS = CATALOGUE
    .filter(cat => cat.category !== "Cement")
    .flatMap(cat => cat.products);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductDetail({ slug }) {
    const detail = PRODUCT_DETAILS[slug];

    // Find the product from CATALOGUE
    const product = ALL_STEEL_PRODUCTS.find(p => p.slug === slug);

    if (!detail || !product) {
        return (
            <main className="min-h-screen bg-off-white flex items-center justify-center">
                <div className="text-center">
                    <p className="font-display text-2xl font-bold text-charcoal mb-4">Product not found</p>
                    <Link href="/products" className="font-body text-sm text-gold hover:underline">← Back to Products</Link>
                </div>
            </main>
        );
    }

    function handleWAEnquiry() {
        const msg = [
            `🏗️ *PRODUCT ENQUIRY*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            ``,
            `📦 *Product:* ${detail.fullName}`,
            `📋 *Standard:* ${detail.standard}`,
            ``,
            `_Please share pricing, availability and delivery details._`,
            `_Sent via amitsteel.co.in_`,
        ].join("\n");
        window.open(`https://wa.me/919880844526?text=${encodeURIComponent(msg)}`, "_blank");
    }

    return (
        <main className="min-h-screen bg-off-white">

            {/* ── HERO ── */}
            <div className="relative overflow-hidden bg-deep-navy pb-16 pt-36 md:pb-20 md:pt-44">
                <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full opacity-[0.05]"
                    style={{ background: "radial-gradient(circle,#C9A961 0%,transparent 70%)" }} aria-hidden="true" />

                {/* Background product image */}
                <div className="absolute inset-0 opacity-10">
                    <Image src={product.img} alt={detail.fullName} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent" />

                <Container className="relative">
                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
                        className="mb-6 flex items-center gap-2 font-body text-xs text-white/35">
                        <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/products" className="hover:text-white/60 transition-colors">Products</Link>
                        <ChevronRight size={12} />
                        <span className="text-gold/70">{detail.fullName}</span>
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease, delay: 0.05 }}
                        className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/60">
                        {detail.category}
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.1 }}
                        className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
                        {detail.fullName}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.18 }}
                        className="mt-3 font-body text-sm text-white/45">
                        Standard: {detail.standard}
                    </motion.p>
                </Container>
            </div>

            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            {/* ── MAIN CONTENT ── */}
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

                    {/* ── LEFT: Detail content ── */}
                    <div className="lg:col-span-8">

                        {/* Back link */}
                        <Link href="/products"
                            className="mb-8 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                            <ArrowLeft size={12} /> Back to All Products
                        </Link>

                        {/* Product image + description */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-10">
                            <div className="relative h-64 overflow-hidden border border-charcoal/10 md:h-80">
                                <Image src={product.img} alt={detail.fullName} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
                            </div>
                            <div className="flex flex-col justify-center gap-4">
                                <div>
                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-2">About this product</p>
                                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{detail.description}</p>
                                </div>
                                <div>
                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/35 mb-2">Available Grades</p>
                                    <p className="font-body text-sm font-semibold text-charcoal">{detail.grades}</p>
                                </div>
                                <div>
                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/35 mb-2">Used For</p>
                                    <p className="font-body text-sm text-charcoal/65">{product.useCase}</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {product.brands.map(b => (
                                        <span key={b} className="border border-charcoal/10 px-2 py-0.5 font-body text-[9px] uppercase tracking-wider text-charcoal/45">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-10 border border-charcoal/10 bg-white p-6 md:p-8">
                            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">Key Features</p>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {detail.keyFeatures.map((f, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 h-1.5 w-1.5 shrink-0 bg-gold" />
                                        <p className="font-body text-sm text-charcoal/65">{f}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Specifications Table */}
                        <div className="mb-10">
                            <div className="mb-4">
                                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-1">Technical Specifications</p>
                                <h2 className="font-display text-xl font-bold text-charcoal md:text-2xl">{detail.tableTitle}</h2>
                            </div>

                            <div className="overflow-x-auto border border-charcoal/10">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-deep-navy">
                                            {detail.tableHeaders.map(h => (
                                                <th key={h} className="px-4 py-3 text-left font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-gold/80 whitespace-nowrap">
                                                    {h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {detail.tableRows.map((row, ri) => (
                                            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-soft-gray"}>
                                                {row.map((cell, ci) => (
                                                    <td key={ci} className="px-4 py-3 font-body text-sm text-charcoal/70 whitespace-nowrap border-b border-charcoal/6">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {detail.tableNote && (
                                <div className="mt-3 bg-gold/8 border border-gold/20 px-4 py-3">
                                    <p className="font-body text-xs text-charcoal/55">{detail.tableNote}</p>
                                </div>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button onClick={handleWAEnquiry}
                                className="flex flex-1 items-center justify-center gap-2.5 bg-gold py-4 font-body text-sm font-semibold uppercase tracking-widest text-deep-navy hover:bg-gold-glow hover:shadow-[0_8px_24px_-4px_rgba(201,169,97,0.4)] transition-all duration-300">
                                <FaWhatsapp size={17} /> Enquire on WhatsApp
                            </button>
                            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                                className="flex flex-1 items-center justify-center gap-2 border border-charcoal/15 py-4 font-body text-sm font-semibold uppercase tracking-widest text-charcoal/60 hover:border-gold/40 hover:text-charcoal transition-all duration-300">
                                <Phone size={15} /> Call Us
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT: All Products Sidebar ── */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28">
                            <div className="bg-deep-navy px-5 py-4">
                                <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold/70">All Products</p>
                            </div>
                            <div className="border border-t-0 border-charcoal/12 bg-white">
                                {ALL_STEEL_PRODUCTS.map(p => (
                                    <Link key={p.id} href={`/products/${p.slug}`}
                                        className={[
                                            "flex items-center justify-between border-b border-charcoal/8 px-5 py-3.5 transition-all duration-200 group",
                                            p.slug === slug
                                                ? "bg-gold/10 border-l-2 border-l-gold"
                                                : "hover:bg-soft-gray",
                                        ].join(" ")}>
                                        <span className={[
                                            "font-body text-sm",
                                            p.slug === slug ? "font-semibold text-charcoal" : "text-charcoal/60 group-hover:text-charcoal",
                                        ].join(" ")}>
                                            {p.name}
                                        </span>
                                        <ChevronRight size={14} className={p.slug === slug ? "text-gold" : "text-charcoal/20 group-hover:text-charcoal/40"} />
                                    </Link>
                                ))}
                            </div>

                            {/* Quick enquiry */}
                            <div className="mt-4 border border-charcoal/12 bg-deep-navy p-5">
                                <p className="font-body text-xs font-semibold text-white/60 mb-3">Need a quick quote?</p>
                                <button onClick={handleWAEnquiry}
                                    className="flex w-full items-center justify-center gap-2 bg-gold py-3 font-body text-xs font-semibold uppercase tracking-widest text-deep-navy hover:bg-gold-glow transition-all">
                                    <FaWhatsapp size={14} /> WhatsApp Us
                                </button>
                                <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                                    className="mt-2 flex w-full items-center justify-center gap-2 border border-white/15 py-3 font-body text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white hover:border-white/30 transition-all">
                                    <Phone size={13} /> {CONTACT.phones[0]}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </main>
    );
}