describe("Gilded Rose", function() {
  describe("Majority of Items", function() {
    it("should degrade quality of item twice as fast, after sellIn date passed", function() {
      items = [new Item("+5 Dexterity Vest", 0, 4)];
      update_quality();
      expect(items[0].sell_in).toBe(-1);
      expect(items[0].quality).toBe(2);
    });

    it("Quality of item is never negative", function() {
      items = [new Item("+5 Dexterity Vest", 10, 0)];
      update_quality();
      expect(items[0].sell_in).toBe(9);
      expect(items[0].quality).toBe(0);
    });

    it("Quality of item is never more than 50", function() {
      items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)];
      update_quality();
      expect(items[0].sell_in).toBe(4);
      expect(items[0].quality).toBe(50);
    });
});

describe("Aged Brie", function() {
  it("increases in Quality the older it gets", function() {
    items = [new Item("Aged Brie", 20, 0)];
    update_quality();
    expect(items[0].sell_in).toBe(19);
    expect(items[0].quality).toBe(1);
  });
});

describe("Sulfurus (Legendary Item)", function() {
  it("never has to be sold or decreases in Quality", function() {
    items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
    update_quality();
    expect(items[0].sell_in).toBe(0);
    expect(items[0].quality).toBe(80);
  });
});

});
