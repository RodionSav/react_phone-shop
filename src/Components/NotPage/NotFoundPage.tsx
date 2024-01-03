import '../PhonePage/PhonesPage.scss';
import '../../App.scss';
import { BackLink } from '../BackLink/BackLink';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <div className="page">
      <BackLink text="Page" />
      <h1 className="phones__title">Page is not exist</h1>
    </div>
  );
};
