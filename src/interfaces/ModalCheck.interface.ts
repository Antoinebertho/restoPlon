export interface ModalCheckProps {
    onClose: () => void;
    restaurant: {
      name: string;
      img: string;
      address: string;
      description_long: string;
      menu: {
        entrees: string[];
        dishes: string[];
        deserts: string[];
      };
      description_short: string;
    };
  }