import React from 'react';
import { GithubLogo, BookOpen, DiscordLogo } from '@phosphor-icons/react';
import SettingsButton from '../SettingsButton';

export const IconMap = {
  GithubLogo: GithubLogo,
  BookOpen: BookOpen,
  DiscordLogo: DiscordLogo,
  SettingsButton: SettingsButton
};

const IconComponent = ({ iconName, className, weight = 'fill' }) => {
  const Icon = IconMap[iconName];
 
  if (!Icon) {
    console.warn(`Icon ${iconName} not found in IconMap`);
    return null;
  }

  return <Icon className={className} weight={weight} />;
};

export default IconComponent;
