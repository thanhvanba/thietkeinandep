// import React, { useState } from 'react';

// const TruncatedContent = ({ content, maxLength }) => {
//     console.log("🚀 ~ TruncatedContent ~ content[0]:", content[0].props.children)
//     console.log("🚀 ~ TruncatedContent ~ content:", content)
//     if (!content) {
//         return null; // Hoặc bạn có thể trả về chuỗi trống hoặc thông báo lỗi khác nếu thích
//     }
//     const [isTruncated, setIsTruncated] = useState(true);

//     const toggleTruncate = () => {
//         setIsTruncated(!isTruncated);
//     };

//     return (
//         <div className='flex'>
//             {isTruncated ? (
//                 <p>{content[0].props.children.slice(0, maxLength)} </p>
//             ) : (
//                 <p>{content[0].props.children}</p>
//             )}
//             {content[0].props.children.length > maxLength &&
//                 <button onClick={toggleTruncate}>
//                     {isTruncated ? '...' : '<<'}
//                 </button>}
//         </div>
//     );
// }

// export default TruncatedContent;