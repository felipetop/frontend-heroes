import React, { useState } from 'react';
import './panel.scss';

function Panel(props) {
  const [checked, setChecked] = useState(false);
  return (
    <div className={props.className}>
      <aside className="Panel">
        <div className="column grey">Encontrados 20 heróis</div>
        <div className="column">
          <div>Ordernar por nome - A/Z</div>
          <div>
            <input type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
          <div>Somente favoritos</div>
        </div>
      </aside>
    </div>
  );
}
  
export default Panel;
  