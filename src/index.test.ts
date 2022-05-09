import boxDraw from './index';

test('default tree', () => {
  const list = [
    {
      name: 'parent-folder',
      children: [
        {
          name: 'child-1',
          children: [
            {
              name: 'child-1-1',
            },
            {
              name: 'child-1-2',
            },
          ],
        },
        {
          name: 'child-2',
          children: [
            {
              name: 'child-2-1',
            },
            {
              name: 'child-2-2',
              children: [
                {
                  name: 'child-2-2-1',
                  children: [
                    {
                      name: 'child-2-2-1-1',
                    },
                    {
                      name: 'child-2-2-1-2',
                    },
                  ],
                },
              ],
            },
            {
              name: 'child-2-3',
            },
          ],
        },
      ],
    },
  ];

  expect(boxDraw(list)).toMatchSnapshot();
  expect(boxDraw(list, 2)).toMatchSnapshot();
});
