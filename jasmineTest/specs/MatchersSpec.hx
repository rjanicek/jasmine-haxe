package jasmineTest.specs;
import jasmine.J;
import js.Lib;

class MatchersSpec {

	public function new() {
		J.describe("Matchers", function() {
			
			J.it("should have toBe", function() {
				J.expect(true).toBe(true);
			});
			
			J.it("should have not", function() {
				J.expect(true).not.toBe(false);
			});
			
			J.it("should have toBeDefined", function() {
				J.expect(1).toBeDefined();
			});
			
			J.it("should have toBeFalsy", function() {
				J.expect(false).toBeFalsy();
			});
			
			J.it("should have toBeGreaterThan", function() {
				J.expect(2).toBeGreaterThan(1);
				J.expect("b").toBeGreaterThan("a");
			});
			
			J.it("should have toBeLessThan", function() {
				J.expect(1).toBeLessThan(2);
				J.expect("a").toBeLessThan("b");
			});	
			
			J.it("should have toBeNull", function() {
				J.expect(null).toBeNull();
			});
			
			J.it("should have toBeTruthy", function() {
				J.expect(true).toBeTruthy();
			});
			
			J.it("should have toBeUndefined", function() {
				J.expect(Lib.eval("undefined")).toBeUndefined();
			});
			
			J.it("should have toContain", function() {
				J.expect([0, 1, 2, 3]).toContain(1);
				J.expect([0, 1, 2, 3]).not.toContain(4);
			});
			
			J.it("should have toEqual", function() {
				J.expect( [0] ).toEqual( [0] );
				J.expect( [0] ).not.toEqual( [1] );
			});
			
			J.it("should have toMatch", function() {
				J.expect("jasmine is cool").toMatch("jasmine");
			});
			
			J.it("should have toThrow", function() {
				J.expect(function() { throw "knife"; } ).toThrow("knife");
				J.expect(function() { throw "knife"; } ).not.toThrow("axe");
			});

		});
	}
	
}