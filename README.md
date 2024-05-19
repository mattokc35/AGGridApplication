# Kyulux Take-Home Code Test

I have built this data-rich web application using the following tech stack:

**Frontend:** `React`, `TypeScript`, `AG Grid`, `Vite`, `Jest`

**Backend:** `Django`, `Python`

I used `TypeScript` to ensure type-safety and reduce compile-time errors, and chose `Vite` over Webpack for faster bundling/build times. The frontend is very simple, with a MaterialTable.tsx component which I built that is being rendered inside App.tsx. There is also a component test implemented with `Jest` and `React Testing Library` for the MaterialTable component. The backend is also very straighforward, with a simple REST API setup with `Python` and `Django` in order to serve the Chemical data in the json file to the frontend. The API only has one (GET) route, `/chemicals`.



## Screenshots

Application Screenshot

![App Screenshot](https://github.com/mattokc35/KyuluxAgGridApplication/blob/main/screenshots/app.png)

Edit

![Edit](https://github.com/mattokc35/KyuluxAgGridApplication/blob/main/screenshots/edit.png)

Filter

![Filter](https://github.com/mattokc35/KyuluxAgGridApplication/blob/main/screenshots/filter.png)

Delete

![Delete](https://github.com/mattokc35/KyuluxAgGridApplication/blob/main/screenshots/delete.png)

Sort

![Sort](https://github.com/mattokc35/KyuluxAgGridApplication/blob/main/screenshots/sort.png)

