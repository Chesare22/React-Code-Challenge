import React from 'react';

import * as Types from 'Types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import {
  faLevelUpAlt,
  faMinusCircle,
  faPlus,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLevelUpAlt, faMinusCircle, faPlus, faSmile);

function getIconProps(
  icon: Types.Icon
): {
  icon: IconProp;
  rotation?: Types.Rotation;
} {
  switch (icon) {
    case 'add':
      return {
        icon: 'plus',
      };
    case 'indent':
      return {
        icon: 'level-up-alt',
        rotation: 90,
      };
    case 'remove':
      return {
        icon: 'minus-circle',
      };
    case 'smile':
      return {
        icon: 'smile',
      };
  }
}

const Icon = ({ icon }: { icon: Types.Icon }) => {
  const iconProps = getIconProps(icon);

  return <FontAwesomeIcon {...iconProps} />;
};

export default Icon;
