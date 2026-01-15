import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  label: string;
  href: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface MegaMenuProps {
  categories: MenuCategory[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ categories }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fade-in">
      <div className="bg-background border border-border rounded-lg shadow-xl p-6 min-w-[700px] max-w-[900px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-heading font-semibold text-foreground mb-3 text-sm uppercase tracking-wide border-b-2 border-primary pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1 hover:pl-2 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
