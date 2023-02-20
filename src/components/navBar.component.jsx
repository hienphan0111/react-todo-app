import { useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav>
      <ul>
        {/* other items here*/}
        <li>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;