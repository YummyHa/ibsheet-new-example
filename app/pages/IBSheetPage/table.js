import React from 'react';
import loader from '@ibsheet/loader';

export const Table = ({ id, el, data, options }) => {
  React.useEffect(() => {
    loader
      .load({
        name: 'ibsheet',
        baseUrl: 'app/public/ibsheet',
      })
      .createSheet({
        id,
        el,
        options,
        data,
      });

    return () => loader.removeSheet(id);
  }, [id, el, data, options]);

  return (
    <div>
      <div id={el} style={{ height: '500px' }} />
    </div>
  );
};
