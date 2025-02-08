import React from 'react'
import DepartmentCards from './_shared/departmentcard';
import { departments } from '../../helpers/constants';

const Pageclient = () => {
  return (
    <div className="parent-wrap mt-28">
      <h3 className="sectionheader">Our Departments</h3>
      <p>
        Discover our diverse departments, each dedicated to excellence in
        research, innovation, and education
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10">
        {departments.map((department, i) => (
          <DepartmentCards
            icon={department.icon}
            title={department.title}
            content={department.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Pageclient