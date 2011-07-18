package jasmineTest.specs;
import jasmine.J;
import js.Lib;

class MatchersSpec {

	public function new() {
		J.describe_("Matchers", function() {
			J.it_("should have toBe", function() {
				J.expect_(true).toBe(true);
			} );
			J.it_("should have not", function() {
				J.expect_(true).not.toBe(false);
			} );
			J.it_("should have toBeDefined", function() {
				J.expect_(1).toBeDefined();
			} );
			J.it_("should have toBeFalsy", function() {
				J.expect_(false).toBeFalsy();
			} );
			J.it_("should have toBeGreaterThan", function() {
				J.expect_(2).toBeGreaterThan(1);
				J.expect_("b").toBeGreaterThan("a");
			} );
			J.it_("should have toBeLessThan", function() {
				J.expect_(1).toBeLessThan(2);
				J.expect_("a").toBeLessThan("b");
			} );			
			J.it_("should have toBeNull", function() {
				J.expect_(null).toBeNull();
			} );
			J.it_("should have toBeTruthy", function() {
				J.expect_(true).toBeTruthy();
			} );
			J.it_("should have toBeUndefined", function() {
				J.expect_(Lib.eval("undefined")).toBeUndefined();
			} );
			J.it_("should have toContain", function() {
				J.expect_([0, 1, 2, 3]).toContain(1);
				J.expect_([0, 1, 2, 3]).not.toContain(4);
			} );
			J.it_("should have toEqual", function() {
				J.expect_( [0] ).toEqual( [0] );
				J.expect_( [0] ).not.toEqual( [1] );
			} );
			J.it_("should have toMatch", function() {
				J.expect_("jasmine is cool").toMatch("jasmine");
			} );
			J.it_("should have toThrow", function() {
				J.expect_(function() { throw "knife"; } ).toThrow("knife");
				J.expect_(function() { throw "knife"; } ).not.toThrow("axe");
			} );
		} );
	}
	
}