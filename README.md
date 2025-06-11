# 🎮 AriseAlert

<div align="center">
  
  [![npm version](https://img.shields.io/npm/v/arisealert?style=for-the-badge&color=00d4ff)](https://www.npmjs.com/package/arisealert)
  [![downloads](https://img.shields.io/npm/dm/arisealert?style=for-the-badge&color=00ff88)](https://www.npmjs.com/package/arisealert)
  [![GitHub stars](https://img.shields.io/github/stars/aniqueali29/arisealert?style=for-the-badge&color=ff6b6b)](https://github.com/aniqueali29/arisealert)
  
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aniqueali29/arisealert@v1.0.2/dist/arisealert.min.css">
<script src="https://cdn.jsdelivr.net/gh/aniqueali29/arisealert@v1.0.2/dist/arisealert.min.js"></script>
```

### NPM
```bash
npm install arisealert
```

## 📖 Usage

### Basic Example
```javascript
// Simple alert
AriseAlert.fire({
    title: 'Welcome, Hunter!',
    message: 'You have entered the Shadow Dungeon',
    icon: '⚔️',
    type: 'success'
});

// Quick methods
AriseAlert.success('Level Up!', 'You reached level 25');
AriseAlert.error('Connection Failed', 'Unable to connect to server');
AriseAlert.warning('Low Health', 'Your HP is below 20%');
```

### Configuration Options
```javascript
AriseAlert.fire({
    title: 'System Alert',
    message: 'Your skills have been upgraded',
    icon: '🔥',
    type: 'success',           // success, error, warning, info
    theme: 'dark',             // dark, light
    timer: 3000,               // Auto-close timer
    showCloseButton: true,
    confirmButtonText: 'Accept',
    onConfirm: () => console.log('Confirmed!')
});
```

### Promise Support
```javascript
const result = await AriseAlert.confirm('Delete this item?');
if (result.isConfirmed) {
    console.log('Item deleted');
}
```

## 🎨 Available Themes

- `dark` - Dark mode - Solo Leveling inspired (default)
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
