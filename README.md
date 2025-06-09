# 🎮 SoloAlert

<div align="center">
  
  [![npm version](https://img.shields.io/npm/v/soloalert?style=for-the-badge&color=00d4ff)](https://www.npmjs.com/package/soloalert)
  [![downloads](https://img.shields.io/npm/dm/soloalert?style=for-the-badge&color=00ff88)](https://www.npmjs.com/package/soloalert)
  [![GitHub stars](https://img.shields.io/github/stars/aniqueali29/soloalert?style=for-the-badge&color=ff6b6b)](https://github.com/aniqueali29/soloalert)
  
  **A futuristic JavaScript alert library inspired by Solo Leveling's cyberpunk aesthetic**
  
</div>

---

## ✨ Features

- 🎨 **Solo Leveling Inspired Design** - Authentic cyberpunk styling
- ⚡ **Zero Dependencies** - Lightweight and fast (8KB)
- 📱 **Mobile Friendly** - Responsive design
- 🔧 **TypeScript Support** - Full type definitions
- 🌈 **Customizable Themes** - Multiple built-in themes

## 🚀 Installation

### CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aniqueali29/soloalert/dist/soloalert.min.css">
<script src="https://cdn.jsdelivr.net/gh/aniqueali29/soloalert/dist/soloalert.min.js"></script>
```

### NPM
```bash
npm install soloalert
```

## 📖 Usage

### Basic Example
```javascript
// Simple alert
SoloAlert.fire({
    title: 'Welcome, Hunter!',
    message: 'You have entered the Shadow Dungeon',
    icon: '⚔️',
    type: 'success'
});

// Quick methods
SoloAlert.success('Level Up!', 'You reached level 25');
SoloAlert.error('Connection Failed', 'Unable to connect to server');
SoloAlert.warning('Low Health', 'Your HP is below 20%');
```

### Configuration Options
```javascript
SoloAlert.fire({
    title: 'System Alert',
    message: 'Your skills have been upgraded',
    icon: '🔥',
    type: 'success',           // success, error, warning, info
    theme: 'cyberpunk',        // cyberpunk, neon, dark, light
    timer: 3000,               // Auto-close timer
    showCloseButton: true,
    confirmButtonText: 'Accept',
    onConfirm: () => console.log('Confirmed!')
});
```

### Promise Support
```javascript
const result = await SoloAlert.confirm('Delete this item?');
if (result.isConfirmed) {
    console.log('Item deleted');
}
```

## 🎨 Available Themes

- `cyberpunk` - Solo Leveling inspired (default)
- `neon` - Bright neon colors
- `dark` - Dark mode
- `light` - Light mode

## 🌟 Browser Support

Modern browsers (Chrome ≥60, Firefox ≥55, Safari ≥12, Edge ≥79)

## 🤝 Contributing

Contributions welcome! Please read our [Contributing Guide](CONTRIBUTING.md).

## 📄 License

MIT © [Anique Ali](https://github.com/aniqueali29)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/aniqueali29">Anique Ali</a>
</div>
