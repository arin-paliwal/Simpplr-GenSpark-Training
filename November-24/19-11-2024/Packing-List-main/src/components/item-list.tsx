import { useState } from 'react';
import { filterItems } from '../lib/items';
import { toKebabCase } from '../lib/kebab-case';
import Item from './items';
import { Item as ItemType } from '../types';
type EmptyStateProps = {
  id: string;
  items: ItemType[];
  filteredItems: ItemType[];
};

const EmptyState = ({ id }: EmptyStateProps) => (
  <p id={id} className="text-primary-400">
    (No items.)
  </p>
);

type ItemListProps = {
  title?: string;
  items: ItemType[];
  update: (id: string, updates: Partial<ItemType>) => void;
  remove: (id: string) => void;
};

const ItemList: React.FC<ItemListProps> = ({
  title = 'Items',
  items,
  update,
  remove,
}) => {
  const [filter, setFilter] = useState<string>('');
  const id = toKebabCase(title);

  const filteredItems = filterItems(items, { name: filter });
  const isEmpty = !items.length;

  return (
    <section id={id} className="w-full border-2 border-primary-200 p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <label htmlFor={`${id}-filter`} className="hidden"></label>
        <input
          id={`${id}-filter`}
          placeholder="Filter"
          className="my-2 w-full py-1"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </header>
      <ul className="flex flex-col gap-2">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} update={update} remove={remove} />
        ))}
      </ul>
      {isEmpty && (
        <EmptyState
          id={`${id}-empty-state`}
          items={items}
          filteredItems={filteredItems}
        />
      )}
    </section>
  );
};

export default ItemList;
