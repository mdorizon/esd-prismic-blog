import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

const Menu = async () => {
  const client = createClient();
  const menu = await client.getSingle('menu');

  return (
    <nav className="bg-[#3743BA] text-white shadow-lg">
      <div className="container mx-auto flex items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center mr-8">
          {menu.data.icon.url &&
            <PrismicNextImage
              field={menu.data.icon}
              alt=''
              width={64}
            />
          }
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6 text-lg font-medium">
          {menu.data.menuitems.map((item, index) => (
            <li key={index}>
              <PrismicNextLink 
                field={item.link} 
                className="transition duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
