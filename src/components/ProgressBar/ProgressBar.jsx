import React from 'react';

const ProgressBar = ({ percentage ,color,status}) => {
  
  const safePercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div style={{ width: '100%', backgroundColor: '#b8b6b6', borderRadius: '8px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${safePercentage}%`, // اینجا عدد رو مستقیم به درصد تبدیل می‌کنیم
          height: '25px',
          backgroundColor: `${color}`, // رنگ سبز برای نوار پر شده
          transition: 'width 0.3s ease-in-out', // انیمیشن نرم برای تغییر درصد
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
      
        }}
      >
          <h1>{status}</h1>
      </div>
    </div>
  );
};

export default ProgressBar;
