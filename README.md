<div align="center">

# 📱 QR Code Generator

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

**A simple, interactive CLI tool to generate QR codes from URLs**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [How It Works](#-how-it-works)

</div>

---

## 📖 Overview

A lightweight Node.js command-line application that converts any URL into a scannable QR code image. Built as a learning project to explore NPM package integration and file system operations in Node.js.

## ✨ Features

- 🎯 **Interactive CLI**: Clean, user-friendly prompts powered by Inquirer.js
- 🖼️ **High-Quality QR Codes**: Generates crisp PNG images using qr-image
- 📝 **Auto-Logging**: Saves URLs to `URL.txt` for record-keeping
- ⚡ **Fast & Lightweight**: Minimal dependencies, instant generation
- 🔧 **Easy to Use**: No configuration required—just run and enter a URL

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Inquirer.js** | Interactive command-line prompts |
| **qr-image** | QR code generation |
| **fs (native)** | File system operations |

## 🚀 Installation

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/TpKek/QR-Code-Generator.git
   cd QR-Code-Generator
```

2. **Install dependencies**
```bash
   npm install
```

## 📋 Usage

Run the application:
```bash
node index.js
```

You'll be prompted to enter a URL:
```
? Type your URL: https://github.com/TpKek
```

**Output:**
- ✅ `qr_Image.png` - Your QR code image
- ✅ `URL.txt` - Text file containing the URL

### Example
```bash
$ node index.js
? Type your URL: https://github.com/TpKek
✓ QR code generated successfully!
✓ URL saved to URL.txt
```

## 🔍 How It Works
```javascript
// 1. Prompt user for URL
inquirer.prompt([...])

// 2. Generate QR code image
qr.image(url, { type: 'png' })

// 3. Save to file system
fs.writeFile('qr_Image.png', ...)
fs.writeFile('URL.txt', ...)
```

**Flow Diagram:**
```
User Input → Inquirer → QR Image Generator → File System → Output Files
```

## 📁 Project Structure
```
QR-Code-Generator/
├── index.js              # Main application logic
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked dependency versions
├── .gitignore           # Git exclusions
├── qr_Image.png         # Generated QR code (example)
├── URL.txt              # Saved URLs log
└── README.md            # This file
```

## 🎓 Learning Objectives

This project demonstrates:
- ✅ Working with NPM packages
- ✅ Asynchronous JavaScript (Promises)
- ✅ Node.js file system (fs) module
- ✅ CLI user input handling
- ✅ External library integration

## 🔮 Future Enhancements

- [ ] Add custom QR code colors
- [ ] Support batch URL processing
- [ ] Add QR code size options
- [ ] Implement error handling for invalid URLs
- [ ] Create web interface version
- [ ] Add QR code with embedded logos

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bertin Dreyer**

- GitHub: [@TpKek](https://github.com/TpKek)
- LinkedIn: [Bertin Dreyer](https://linkedin.com/in/bertindreyer)
- Email: Bertin.Dreyer1@Gmail.com

## ⭐ Show Your Support

Give a ⭐️ if you found this project helpful or interesting!

---

<div align="center">

**Built with ❤️ using Node.js**

</div>
