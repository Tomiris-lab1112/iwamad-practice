import React from 'react';

type TagProps = {
  label: string;
};

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <span className="tag">{label}</span>;
};