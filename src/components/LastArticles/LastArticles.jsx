import React from 'react'
import ArticleBox from '../ArticleBox/ArticleBox'
import SectionHeader from '../SectionHeader/SectionHeader'
export default function LastArticles() {
  return (
    <div className='container'>
      <SectionHeader title="جدیدترین مقاله ها" desc="پیش به سوی ارتقای دانش" btnTitle="تمامی دوره ها" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 mb-5">
        <ArticleBox title="نحوه نصب کتابخونه در پایتون" desc=" آموزش نصب کتابخونه پایتون زبان پایتون هم مانند دیگر زبانهای برنامه نویسی رایج, دارای کتابخونه های مختلفی برای تسریع ... " cover="/images/blog/3.jpg" />
        <ArticleBox title="نحوه نصب کتابخونه در پایتون" desc=" آموزش نصب کتابخونه پایتون زبان پایتون هم مانند دیگر زبانهای برنامه نویسی رایج, دارای کتابخونه های مختلفی برای تسریع ... " cover="/images/blog/3.jpg" />
        <ArticleBox title="نحوه نصب کتابخونه در پایتون" desc=" آموزش نصب کتابخونه پایتون زبان پایتون هم مانند دیگر زبانهای برنامه نویسی رایج, دارای کتابخونه های مختلفی برای تسریع ... " cover="/images/blog/3.jpg" />
      </div>
    </div>
  )
}
