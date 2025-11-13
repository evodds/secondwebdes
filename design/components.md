# Figma → Code components
| Figma Component        | Code Component (import path)         | Key Props                        | Variants                 |
|------------------------|--------------------------------------|----------------------------------|--------------------------|
| Button / Primary       | `@pkg/ui/button`                     | `children`, `onClick`, `size`    | `primary`, `ghost`       |
| Badge / Promo          | `@pkg/ui/badge`                      | `tone` (`success\|warning\|info`) | `solid`, `soft`          |
| Product Card (4:5)     | `@pkg/ui/product-card`               | `title`, `price`, `img`, `badge` | `default`, `sale`, `oos` |
| Category Chip          | `@pkg/ui/chip`                       | `active`, `onToggle`, `icon`     | —                        |
| Drawer (mobile filter) | `@pkg/ui/drawer`                     | `open`, `onOpenChange`           | —                        |
| Header / Nav           | `@pkg/ui/header`                     | `links`, `cartCount`             | desktop/mobile           |

> If the Figma component name differs, add a new row; keep the import paths consistent.
