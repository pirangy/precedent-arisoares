interface RegularListProps<T> {
    items: T[];
    resourceName: string;
    itemComponent: React.ComponentType<Partial<{ [key: string]: T }>>;
}

export const RegularList = <T,>({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: RegularListProps<T>): JSX.Element => {
    return (
        <>
            {items.map((item, i) => (
                <ItemComponent key={i} {...{ [resourceName]: item } as Partial<{ [key: string]: T }>}/>
            ))}
        </>
    );
};
