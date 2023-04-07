import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

interface ModalRemoveProps {
  isOpen: boolean;
  onClose: () => void;
  idRef: number;
}

export const ModalRemove: React.FC<ModalRemoveProps> = ({
  isOpen,
  onClose,
  idRef,
}: ModalRemoveProps) => {
  const { removeFavorite } = useContext(FavoritesContext);

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none --tw-translate-x: (-50%, -50%)">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-gray-700 border-0 rounded-2xl shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
            <h3 className="text-2xl font-semibold text-center">
              Êtes-vous sûr de vouloir retirer ce restaurant de vos favoris ?
            </h3>
          </div>
          <div className="flex items-center justify-center p-6">
            <button
              className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition transform hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 focus:ring-yellow-400 hover:bg-indigo-500 mr-6"
              onClick={onClose}
            >
              non
            </button>
            <button
              className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition transform hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 focus:ring-yellow-400 hover:bg-indigo-500"
              onClick={() => {
                removeFavorite(idRef);
                onClose();
              }}
            >
              oui
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
