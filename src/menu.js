const menu = (() => {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const shakeMenu = document.createElement('div');
    shakeMenu.classList.add('shake-menu');
    menuContainer.appendChild(shakeMenu);

    shakeMenu.innerHTML = `
    <h1>Menu</h1>

    <h4>Vanilla Coffee Shake $8.00</h4>
    <p>Vanilla almond milk, old brewed black coffee, cinammon, flax seeds, liquid stevia, handful of ice cubes, choice of protein powder</p>

    <h4>Oatmeal Shake $8.00</h4>
    <p>Dry oats, ground cinnamon, pure maple syrup, water or almond milk, handful of ice cubes, choice of protein powder</p>

    <h4>Banana Nut Shake $8.00</h4>
    <p>Banana, almond milk or water, Almonds, 1 scoop vanilla protein powder, handful of ice cubes</p>

    <h4>Cafe Mocha Shake $8.00</h4>
    <p>Almond milk, Cold brew black coffee, Chocolate protein powder, Unsweetened cocoa powder, Liquid stevia, handful of ice cubes</p>

    <h4>Sunny Morning Shake $8.00</h4>
    <p>Seedless peeled orange, Almond milk, 2 scoops unflavored protein powder, handful of ice cubes</p>

    <h4>Orange Creamsicle Shake $8.00</h4>
    <p>Frozen banana, Vanilla Greek yogurt, Fresh squeezed orange juice, 2 scoops vanilla protein powder, handful of ice cubes</p>

    <h4>Bright Berry Shake $8.00</h4>
    <p>Water or almond milk, 2 scoops vanilla protein powder, Raspberries, Strawberries, Blueberries, handful of ice cubes</p>

    <h4>Strawberry Banana Shake $8.00</h4>
    <p>Water or almond milk, 2 scoops vanilla protein powder, handful of ice cubes, vanilla extract, frozen banana, frozen strawberries</p>

    <h4>PeanutButter Cup Shake $8.00</h4>
    <p>Water or almond milk,  scoops chocolate protein powder, unsweetened cocoa powder, creamy peanut butter, handful of ice cubes</p>

    <h4>Creamy Chocolate Shake $8.00</h4>
    <p>Water or almond milk, 2 scoops chocolate protein powder, unsweetened cocoa powder, low-fat sour cream, liquid stevia to taste</p>

    <h3>Creat Your Own with any mix of ingredients $8.00 (4 total +$1.00 for additional)</h3>
    `

    console.log('menu module is working');

    return {
        menuContainer
    }

})();

export {menu}